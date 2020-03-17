
'use strict'

const store = require('./../store')

const onCreateHandSuccess = function (data) {
  console.log(data)
  store.handId = data.hand._id
  console.log('created hand,')
}

const onCreateHandFailure = function (data) {
  console.log('failed to create hand')
}

const onUpdateHandSuccess = function (data) {
  console.log(data)
  console.log('updated hand')
}

const onUpdateHandFailure = function (data) {
  console.log('update failed')
}

const onIndexHandSuccess = function (data) {
  console.log(data)
  console.log('index worked')
}

const onIndexHandFailure = function (data) {
  console.log('index hand didnt work')
}

const onDeleteHandSuccess = function (data) {
  console.log(data)
  console.log('delete hand worked')
}

const onDeleteHandFailure = function (data) {
  console.log('delete hand failed')
}

module.exports = {
  onCreateHandSuccess,
  onCreateHandFailure,
  onUpdateHandSuccess,
  onUpdateHandFailure,
  onIndexHandSuccess,
  onIndexHandFailure,
  onDeleteHandSuccess,
  onDeleteHandFailure
}
