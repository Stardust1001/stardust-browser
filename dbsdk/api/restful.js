import validates from '../validates.js'

export const createRestful = (req = request) => {
  return {
    async get (model, id, key) {
      validates.validateGet(model, id)
      const res = await req({
        url: `/restful?model=${model}&id=${id}`,
        method: 'get'
      })
      if (!key) return res
      return StardustJs.highdict.get(res, key)
    },

    async add (model, data, key) {
      validates.validateAdd(model, data)
      const res = await req({
        url: `/restful/add?model=${model}`,
        method: 'post',
        data
      })
      if (!key) return res
      return StardustJs.highdict.get(res, key)
    },

    async search (model, data, key) {
      validates.validateSearch(model, data)
      const res = await req({
        url: `/restful/search?model=${model}`,
        method: 'post',
        data
      })
      if (!key) return res
      return StardustJs.highdict.get(res, key)
    },

    async update (model, id, data, key) {
      validates.validateUpdate(model, id, data)
      const res = await req({
        url: `/restful?model=${model}&id=${id}`,
        method: 'put',
        data: data
      })
      if (!key) return res
      return StardustJs.highdict.get(res, key)
    },

    async remove (model, id, key) {
      validates.validateRemove(model, id)
      const res = await req({
        url: `/restful?model=${model}&id=${id}`,
        method: 'delete'
      })
      if (!key) return res
      return StardustJs.highdict.get(res, key)
    },

    async func (model, data, key) {
      validates.validateFunc(model, data)
      const res = await req({
        url: `/restful/func?model=${model}`,
        method: 'post',
        data
      })
      if (!key) return res
      return StardustJs.highdict.get(res, key)
    },

    async batch (data, key) {
      validates.validateData(data)
      const res = await req({
        url: `/restful/batch`,
        method: 'post',
        data
      })
      if (!key) return res
      return StardustJs.highdict.get(res, key)
    }
  }
}

export default createRestful
