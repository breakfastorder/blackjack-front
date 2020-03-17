
const config = require('./../config')
const store = require('./../store')

const createHand = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/hands',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateHand = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/hands/' + store.handId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const indexHand = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/hands',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteHand = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/hands/' + store.handId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteAllHand = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/hands/all',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createHand,
  updateHand,
  indexHand,
  deleteHand,
  deleteAllHand
}
