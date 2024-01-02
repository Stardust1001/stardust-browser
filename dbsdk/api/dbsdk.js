
export const createDbsdk = (rest = restful) => {
  class Database {
    constructor (database) {
      this._database = database
    }

    database (name) {
      this._database = database
      return this
    }
    
    table (name) {
      return new Table(this._database, name)
    }
  }

  class Table {
    constructor (database, table) {
      this._database = database
      this._table = table
      this.model = this._database + '.' + this._table
    }

    get (id) {
      return rest.get(this.model, id)
    }

    add (data) {
      return rest.add(this.model, data)
    }

    async search (data, key) {
      const res = await rest.search(this.model, data)
      if (!key) return res
      return StardustJs.highdict.get(res, key)
    }

    update (id, data) {
      return rest.update(this.model, id, data)
    }

    remove (id) {
      return rest.remove(this.model, id)
    }

    func (data) {
      return rest.func(this.model, data)
    }

    batch (data) {
      data.operations.forEach(ele => {
        ele.model = ele.model || this.model
      })
      return rest.batch(data)
    }
  }

  return {
    Database,
    Table
  }
}

export default createDbsdk
