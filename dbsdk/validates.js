
export const validateModel = (model) => {
  if (!model) {
    throw 'model 错误'
  }
}

export const validateId = (id) => {
  const type = typeof id
  if (!id || (type !== 'number' && type !== 'string')) {
    throw 'id 错误'
  }
}

export const validateData = (data) => {
  if (typeof data !== 'object') {
    throw 'data 错误'
  }
}

export const validateGet = (model, id) => {
  this.validateModel(model)
  this.validateId(id)
}

export const validateAdd = (model, data) => {
  this.validateModel(model)
  this.validateData(data)
}

export const validateSearch = (model, data) => {
  this.validateModel(model)
  this.validateData(data)
}

export const validateUpdate = (model, id, data) => {
  this.validateModel(model)
  this.validateId(id)
  this.validateData(data)
}

export const validateRemove = (model, id) => {
  this.validateModel(model)
  this.validateId(id)
}

export const validateFunc = (model, data) => {
  this.validateModel(model)
  this.validateData(data)
  if (data.length < 2) {
    throw 'data 错误'
  }
}

export default {
  validateModel,
  validateId,
  validateData,
  validateGet,
  validateAdd,
  validateSearch,
  validateUpdate,
  validateRemove,
  validateFunc
}
