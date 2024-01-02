import validates from '../validates.js'

export const createRestful = (req = request) => {
  return {
    get (model, id) {
      validates.validateGet(model, id)
      return req({
        url: `/restful?model=${model}&id=${id}`,
        method: 'get'
      })
    },

    add (model, data) {
      validates.validateAdd(model, data)
      return req({
        url: `/restful/add?model=${model}`,
        method: 'post',
        data
      })
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

    update (model, id, data) {
      validates.validateUpdate(model, id, data)
      return req({
        url: `/restful?model=${model}&id=${id}`,
        method: 'put',
        data: data
      })
    },

    remove (model, id) {
      validates.validateRemove(model, id)
      return req({
        url: `/restful?model=${model}&id=${id}`,
        method: 'delete'
      })
    },

    func (model, data) {
      validates.validateFunc(model, data)
      return req({
        url: `/restful/func?model=${model}`,
        method: 'post',
        data
      })
    },

    batch (data) {
      validates.validateData(data)
      return req({
        url: `/restful/batch`,
        method: 'post',
        data
      })
    }
  }
}

export default createRestful
