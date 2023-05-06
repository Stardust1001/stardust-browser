import * as Export2Excel from './Export2Excel.js'

const exportTable2Excel = (id) => {
  Export2Excel.export_table_to_excel(id)
}

const export2Excel = options => {
  Export2Excel.export_json_to_excel(options)
}

const export2Csv = options => {
  const { header, data, filename = 'table' } = options
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
  Export2Excel,
  export2Csv
}
