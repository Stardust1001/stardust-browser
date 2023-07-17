
export const createCommon = (req = request) => {
  const uploadFiles = (data) => {
    return req({
      url: '/common/upload_files',
      method: 'post',
      data
    })
  }

  const getSettings = async (params) => {
    return req({
      url: '/common/get_settings',
      method: 'get',
      params
    })
  }

  const updateSettings = async (data) => {
    return req({
      url: '/common/update_settings',
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
    uploadFiles,
    getSettings,
    updateSettings,
    callSql
  }
}

export default createCommon
