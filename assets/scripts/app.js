
'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const auth = require('./auth/events-auth')
const hands = require('./hands/events-hands')
const table = require('./tables/events-tables')

$(() => {
  $('#sign-up').on('submit', auth.onSignUp)
  $('#sign-in').on('submit', auth.onSignIn)
  $('#sign-out').on('submit', auth.onSignOut)
  $('#change-password').on('submit', auth.onChangePassword)

  $('#get-name').on('click', auth.getUsername)
  $('#make-username').on('submit', auth.makeUsername)

  $('#create-hand').on('click', hands.createHand)
  $('#update-hand').on('click', hands.updateHand)
  $('#index-hand').on('click', hands.indexHand)
  $('#destroy-hand').on('click', hands.deleteHand)
  $('#destroy-all-hand').on('click', hands.deleteAllHand)

  $('#create-table').on('click', table.createTable)
  $('#update-table').on('click', table.updateTable)
  $('#index-table').on('click', table.indexTable)
  $('#destroy-table').on('click', table.deleteTable)
  $('#join-table').on('submit', table.joinTable)
  $('#leave-table').on('submit', table.leaveTable)
  $('#destroy-all-table').on('click', table.deleteAllTable)
})
