
'use strict'

const store = require('./../store')
// const play = require('./../playGame')

const onCreateTableSuccess = function (data) {
  console.log(data)
  store.tableId = data.table._id
  console.log(store.tableId)
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

const onJoinTableSuccess = function (data) {
  console.log(data)
  console.log('Join worked')
}

const onJoinTableFailure = function (data) {
  console.log('join table didnt work')
}

const onLeaveTableSuccess = function (data) {
  console.log(data)
  console.log('leave worked')
}

const onLeaveTableFailure = function (data) {
  console.log('leave table didnt work')
}

const onDeleteTableSuccess = function (data) {
  console.log(data)
  console.log('delete table worked')
}

const onDeleteTableFailure = function (data) {
  console.log('delete table failed')
}

const checkHostIdFailure = function (data) {
  console.log('getting hostid failed')
}

const onDealTableSuccess = function (data) {
  console.log(data)
  store.playersAtTable = data
  const players = data.tables.players
  console.log(players)
  if (players[0] !== null) {
    $('#player-one-header').show()
    $('#player-one').html(players[0])
  }
  if (players[1] !== null) {
    $('#player-two-header').show()
    $('#player-two').html(players[1])
  }
  if (players[2] !== null) {
    $('#player-three-header').show()
    $('#player-three').html(players[2])
  }
  if (players[3] !== null) {
    $('#player-four-header').show()
    $('#player-four').html(players[3])
  }
}

const onDealTableFailure = function (data) {
  console.log('deal no work')
}

const showCards = function (data) {
  console.log(data)
}

module.exports = {
  onCreateTableSuccess,
  onCreateTableFailure,
  onUpdateTableSuccess,
  onUpdateTableFailure,
  onIndexTableSuccess,
  onIndexTableFailure,
  onJoinTableSuccess,
  onJoinTableFailure,
  onLeaveTableSuccess,
  onLeaveTableFailure,
  onDeleteTableSuccess,
  onDeleteTableFailure,
  checkHostIdFailure,
  onDealTableSuccess,
  onDealTableFailure,
  showCards
}
