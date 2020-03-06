
const config = require('./../config')
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createPlayer = function (user, data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/players',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updatePlayer = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/players/' + store.playerID,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const indexPlayer = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/players',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePlayer = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/players/' + store.playerID,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createHand = function (user, data) {
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

const createTablePopulated = function (data) {
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

const deleteTable = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/tables/' + store.tableId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createTable,
  createTablePopulated,
  updateTable,
  indexTable,
  deleteTable,
  createPlayer,
  updatePlayer,
  indexPlayer,
  deletePlayer,
  createHand,
  updateHand,
  indexHand,
  deleteHand
}
