
'use strict'

const store = require('./../store')

const onCreateTableSuccess = function (data) {
  console.log(data)
  store.tableId = data.table._id
  console.log('created table,')
}

const onCreateTableFailure = function (data) {
  console.log('failed to create table')
}

const onUpdateTableSuccess = function (data) {
  console.log(data)
  console.log('updated table')
}

const onUpdateTableFailure = function (data) {
  console.log('update failed')
}

const onIndexTableSuccess = function (data) {
  console.log(data)
  console.log('index worked')
}

const onIndexTableFailure = function (data) {
  console.log('index table didnt work')
}

const onDeleteTableSuccess = function (data) {
  console.log(data)
  console.log('delete table worked')
}

const onDeleteTableFailure = function (data) {
  console.log('delete table failed')
}

module.exports = {
  onCreateTableSuccess,
  onCreateTableFailure,
  onUpdateTableSuccess,
  onUpdateTableFailure,
  onIndexTableSuccess,
  onIndexTableFailure,
  onDeleteTableSuccess,
  onDeleteTableFailure
}
