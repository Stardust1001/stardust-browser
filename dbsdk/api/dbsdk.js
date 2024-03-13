
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

    get (id, key) {
      return rest.get(this.model, id, key)
    }

    add (data, key) {
      return rest.add(this.model, data, key)
    }

    search (data, key) {
      return rest.search(this.model, data, key)
    }

    update (id, data, key) {
      return rest.update(this.model, id, data, key)
    }

    remove (id, key) {
      return rest.remove(this.model, id, key)
    }

    func (data, key) {
      return rest.func(this.model, data, key)
    }

    batch (data, key) {
      data.operations.forEach(ele => {
        ele.model = ele.model || this.model
      })
      return rest.batch(data, key)
    }
  }

  return {
    Database,
    Table
  }
}

export default createDbsdk
