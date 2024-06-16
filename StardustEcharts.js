const StardustEcharts = {
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
              return value
            })
            return values.length === 1 ? values[0] : values.join('-')
          }
        }
        return by._getter(row)
      }
      const keys = []
      data.forEach(row => {
        const key = getByValue(groupBy, row) ?? '未知'
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
          case 'count': {
            summaryMap[key] = values.length
            break
          }
          case 'sum': {
            summaryMap[key] = values.reduce((sum, v) => sum + v, 0).toFixed(2) * 1
            break
          }
          case 'average': {
            if (!values.length) {
              summaryMap[key] = ''
            } else {
              const sum = values.reduce((sum, v) => sum + v, 0).toFixed(2) * 1
              summaryMap[key] = (sum / values.length).toFixed(2) * 1
            }
            break
          }
        }
      }
      const result = {
        dimensions: [
          groupByName || groupBy.name || groupBy.dimension,
          valueByName || valueBy.name || valueBy.dimension
        ],
        data: keys.map(key => [key, summaryMap[key]])
      }
      print && console.log(result)
      return postProcess ? postProcess(result) : result
    }
  }
}

export default StardustEcharts
