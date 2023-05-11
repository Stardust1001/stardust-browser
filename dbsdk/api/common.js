
export const createCommon = (req = request) => {
  const uploadFile = (data) => {
    return req({
      url: '/common/upload_file',
      method: 'post',
      data
    })
  }

  const getSetting = async (params) => {
    return req({
      url: '/common/get_setting',
      method: 'get',
      params
    })
  }

  const updateSetting = async (data) => {
    return req({
      url: '/common/update_setting',
      method: 'post',
      data
    })
  }
  const callSql = async (data) => {
    return req({
      url: '/common/call_sql',
      method: 'post',
      data
    })
  }

  return {
    uploadFile,
    getSetting,
    updateSetting,
    callSql
  }
}

export default createCommon
