
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
  validateModel(model)
  validateId(id)
}

export const validateAdd = (model, data) => {
  validateModel(model)
  validateData(data)
}

export const validateSearch = (model, data) => {
  validateModel(model)
  validateData(data)
}

export const validateUpdate = (model, id, data) => {
  validateModel(model)
  validateId(id)
  validateData(data)
}

export const validateRemove = (model, id) => {
  validateModel(model)
  validateId(id)
}

export const validateFunc = (model, data) => {
  validateModel(model)
  validateData(data)
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
