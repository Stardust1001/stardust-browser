export const preview = (type, url) => {
  const baseSuffixes = ['png', 'jpg', 'jpeg', 'gif', 'txt']
  const officeSuffixes = ['doc', 'docx', 'ppt', 'pptx']
  const canViewSuffixes = [...baseSuffixes, ...officeSuffixes, 'pdf']

  if (canViewSuffixes.includes(type)) {
    const a = document.createElement('a')
    a.target = '_blank'

    if (baseSuffixes.includes(type)) {
      a.href = url
    } else if (type === 'pdf') {
      a.href = `http://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURI(url)}`
    } else if (officeSuffixes.includes(type)) {
      a.href = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURI(url)}`
    }

    a.click()
  } else {
    throw `暂不支持预览该格式（${type}）文件`
  }
}

export const select = async (accept, multiple = false, dir = false) => {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = accept
  if (dir) {
    multiple = true
    input.webkitdirectory = true
  }
  input.multiple = multiple
  return new Promise(resolve => {
    input.onchange = () => {
      input.remove()
      resolve(multiple ? input.files : input.files[0])
    }
    document.body.appendChild(input)
    input.click()
  })
}

export const toType = async (file, type = 'text') => {
  const reader = new FileReader()
  const types = {
    text: 'readAsText',
    arraybuffer: 'readAsArrayBuffer',
    binarystring: 'readAsBinaryString',
    dataurl: 'readAsDataURL'
  }
  if (!(type in types)) {
    return null
  }
  return new Promise(resolve => {
    reader.onload = () => resolve(reader.result)
    reader[types[type]](file)
  })
}

export default {
  preview,
  select,
  toType
}
