import { buffer2Base64 } from './funcs.js'

export class SpeechRecognition {
	constructor (config = {}) {
		this.config = config
		this.recorder = null
		this.ws = null

		this.isStarted = false
		this.text = ''
		this.tempText = ''
	}

	start () {
		if (this.isStarted) return
		this.recorder = new RecorderManager(this.config.cdnUrl)
		this.recorder.onStart = this.onStart
		this.recorder.onFrameRecorded = this.onFrameRecorded
		this.recorder.onStop = this.onStop
		this.ws = new WebSocket(this.config.wsUrl)
		this.ws.onopen = this.onWsOpen
		this.ws.onmessage = this.onWsMessage
		this.ws.onerror = this.onWsError
		this.ws.onclose = this.onWsClose
		this.isStarted = true
	}

	stop () {
		this.ws.close()
		this.recorder.stop()
		this.isStarted = false
	}

	onWsOpen () {
		this.recorder.start({
			sampleRate: 16000,
      frameSize: 1280
		})
		const params = {
      common: { app_id: this.config.APPID },
      business: {
        language: 'zh_cn',
        domain: 'iat',
        accent: 'mandarin',
        vad_eos: 5000,
        dwa: 'wpgs',
        ...this.config.business
      },
      data: {
        status: 0,
        format: 'audio/L16;rate=16000',
        encoding: 'raw'
      }
    }
    this.ws.send(JSON.stringify(params))
	}

	onWsMessage (e) {
		const result = JSON.parse(e.data)
		const data = result.data?.result
    if (data) {
    	const str = data.ws.map(e => e.cw[0].w).join('')
      if (data.pgs) {
        if (data.pgs === 'apd') this.text = this.tempText
        this.tempText = this.text + str
      } else {
      	this.text += str
      }
      this.onMessage(this.tempText || this.text || '')
    }
    if (result.code || result.data.status === 2) this.ws.close()
	}

	onMessage (text) { }

	onWsError () {
		this.recorder.stop()
	}

	onWsClose () {
		this.recorder.stop()
	}

	onFrameRecorded ({ isLastFrame, frameBuffer }) {
		if (this.ws.readyState === this.ws.OPEN) {
			this.ws.send(JSON.stringify({
				data: {
					status: isLastFrame ? 2 : 1,
          format: 'audio/L16;rate=16000',
          encoding: 'raw',
          audio: buffer2Base64(frameBuffer)
				}
			}))
		}
	}

	onStart () { }

	onStop () { }
}

export default SpeechRecognition
