'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api-tables')
const ui = require('./ui-tables')
const store = require('./../store')

const createTable = function (user, data) {
  event.preventDefault()

  // "table": {
  //     "cards": "'"${CARDS}"'",
  //     "current_bet": "'"${BET}"'"
  //   }
  const tables = {
    table: {
      cards: '123',
      total_bet: 0,
      owner_name: store.user.email
    }
  }
  // const currentUser = store.tableData.user1_id
  console.log(tables)
  // sending it data so it knows what table to update
  api.createTable(tables)
    .then(ui.onCreateTableSuccess)
    .catch(ui.onCreateTableFailure)
}

const updateTable = function (data) {
  event.preventDefault()

  const tables = {
    table: {
      cards: '123',
      total_bet: 100,
      owner_name: store.user.email
    }
  }
  // sending it data so it knows what table to update
  api.updateTable(tables)
    .then(ui.onUpdateTableSuccess)
    .catch(ui.onUpdateTableFailure)
}

const indexTable = function (event) {
  event.preventDefault()

  api.indexTable()
    .then(ui.onIndexTableSuccess)
    .catch(ui.onIndexTableFailure)
}

const deleteTable = function (event) {
  event.preventDefault()

  api.deleteTable()
    .then(ui.onDeleteTableSuccess)
    .catch(ui.onDeleteTableFailure)
}

const deleteAllTable = function (event) {
  event.preventDefault()

  api.deleteAllTable()
    .then(ui.onDeleteTableSuccess)
    .catch(ui.onDeleteTableFailure)
}

module.exports = {
  createTable,
  updateTable,
  indexTable,
  deleteTable,
  deleteAllTable
}
