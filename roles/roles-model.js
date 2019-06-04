const knex = require('knex')

const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: './data/roles.db3'
  },
  useNullAsDefault: true, //required only for sqlite3
  //debug: true
}

const db = knex(knexConfig)

module.exports = {
  find,
  findById,
  add,
  update,
  remove
}

function find() {
return db('roles')
}
function findById(id) {
return db('roles')
.where({ id })
.first()
}
function add(role) {
return db('roles')
.insert(role, 'id')
}
function update(id, change) {
return db('roles')
.where({ id })
.update(change)
}
function remove(id) {
return db('roles')
.where({ id })
.delete()
}
