
const config = require('./../config')
const store = require('./../store')

const createTable = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/tables',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateTable = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/tables/' + store.tableId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const indexTable = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/tables',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const joinTable = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/tables/join/' + data.table.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const leaveTable = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/tables/leave/' + data.table.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteTable = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/tables/' + store.tableId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteAllTable = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/tables/all',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const checkHostId = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/tables/gameId',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const dealTable = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/tables/users',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createTable,
  updateTable,
  indexTable,
  joinTable,
  leaveTable,
  deleteTable,
  deleteAllTable,
  checkHostId,
  dealTable
}
