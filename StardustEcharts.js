const StardustEcharts = {
  generateOptions ({ dimensions, source, category, series, value, summary, chartType }) {
    const categoryIndex = dimensions.indexOf(category)
    const seriesIndex = dimensions.indexOf(series)
    const categories = [...new Set(source.map(ele => ele[categoryIndex]))]
    const serieses = [...new Set(source.map(ele => ele[seriesIndex]))]

    const option = { dataset: [], series: [] }
    serieses.forEach(ele => {
      option.dataset.push({
        id: category + '-' + ele,
        transform: [
          { type: 'filter', config: { dimension: series, '=': ele } },
          {
            type: 'StardustEcharts:grouping',
            config: {
              groupBy: [
                { dimension: category },
                { dimension: series }
              ],
              valueBy: { dimension: value },
              print: true
            }
          }
        ]
      })
      option.series.push({
        type: chartType,
        name: ele,
        id: category + '-' + ele,
        datasetId: category + '-' + ele,
        label: { show: true, position: 'top' },
        encode: { x: 0, y: 2, tooltip: [0, 1, 2] }
      })
    })
    return option
  },
  grouping: {
    type: 'StardustEcharts:grouping',
    transform ({ config, upstream }) {
      const dimensions = upstream.cloneAllDimensionInfo()
      const data = upstream.cloneRawData()
      const { groupBy, valueBy, groupByName, valueByName, summary = 'sum', postProcess, print } = config

      const resultMap = {}
      const getByValue = (by, row) => {
        if (!by._getter) {
          const bys = Array.isArray(by) ? by : [by]
          const byDimensions = bys.map(ele => ele.dimension)
          const byIndices = byDimensions.map(ele => dimensions.findIndex(e => e.name === ele || e.index === ele))
          const byMethods = bys.map(ele => ele.method)
          const byProps = bys.map(ele => ele.props)
          by._dimensions = byDimensions
          by._getter = row => {
            const values = byIndices.map(i => {
              let value = row[i]
              if (byMethods[i]) {
                if (typeof byMethods[i] === 'function') {
                  value = byMethods[i](value, row)
                } else {
                  value = value[byMethods[i]](...byProps[i])
                }
              }
              return value ?? '未知'
            })
            return values.length === 1 ? values[0] : values.join('::')
          }
        }
        return by._getter(row)
      }
      const keys = []
      data.forEach(row => {
        const key = getByValue(groupBy, row)
        if (!keys.includes(key)) keys.push(key)
        resultMap[key] ||= []
        resultMap[key].push(getByValue(valueBy, row))
      })

      const summaryMap = {}
      for (let key in resultMap) {
        const values = resultMap[key]
        if (typeof summary === 'function') {
          summaryMap[key] = summary(key, values, resultMap)
          continue
        }
        if (summary === 'count') {
          summaryMap[key] = values.length
          continue
        } else if (summary === 'sum') {
          summaryMap[key] = values.reduce((sum, v) => sum + v, 0).toFixed(2) * 1
          continue
        }
        if (!values.length) {
          summaryMap[key] = ''
          continue
        }
        switch (summary) {
          case 'first': {
            summaryMap[key] = values[0]
            break
          }
          case 'last': {
            summaryMap[key] = values[values.length - 1]
            break
          }
          case 'min': {
            summaryMap[key] = Math.min.apply(null, values)
            break
          }
          case 'max': {
            summaryMap[key] = Math.max.apply(null, values)
            break
          }
          case 'average': {
            const sum = values.reduce((sum, v) => sum + v, 0).toFixed(2) * 1
            summaryMap[key] = (sum / values.length).toFixed(2) * 1
            break
          }
        }
      }
      const result = {
        dimensions: [
          ...groupBy._dimensions,
          ...valueBy._dimensions
        ],
        data: keys.map(key => [...key.split('::'), summaryMap[key]])
      }
      print && console.log(result)
      return postProcess ? postProcess(result) : result
    }
  }
}

export default StardustEcharts
