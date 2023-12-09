import * as Export2Excel from './Export2Excel.js'

const exportTable2Excel = (id) => {
  Export2Excel.export_table_to_excel(id)
}

const export2Excel = options => {
  Export2Excel.export_json_to_excel(options)
}

const export2Csv = async options => {
  await window.DynamicLibs?.use('Papa')
  let { header, data, filename = 'table' } = options
  const integerReg = /^\d{6,}$/
  data = data.map(row => {
    if (!row || typeof row !== 'object') return row
    if (Array.isArray(row)) {
      return row.map(value => integerReg.test(value) ? (value + '\t') : value)
    }
    for (let key in row) {
      if (integerReg.test(row[key])) {
        row[key] += '\t'
      }
    }
    return row
  })
  const csv = window.Papa.unparse({
    data,
    fields: header
  })
  const blob = new Blob([csv], { type: 'application/csv' })
  window.saveAs(
    blob,
    filename.toLowerCase().endsWith('.csv') ? filename : (filename + '.csv')
  )
}

export default {
  exportTable2Excel,
  export2Excel,
  export2Csv
}
