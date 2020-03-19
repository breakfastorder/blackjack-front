'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api-tables')
const ui = require('./ui-tables')
const store = require('./../store')

const updateTable = function (data) {
  event.preventDefault()

  const tables = {
    table: {
      cards: 'A123456789xjqk',
      total_bet: 100,
      owner_name: store.user.email,
      game_id: store.game_id
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
  updateTable,
  indexTable,
  deleteTable,
  deleteAllTable
}
