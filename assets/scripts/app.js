
'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./folder/events')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('submit', events.onSignOut)
  $('#change-password').on('submit', events.onChangePassword)

  $('#make-table').on('click', events.makeTable)
  $('#update-table').on('click', events.updateTable)
  $('#index-table').on('click', events.indexTable)
  $('#destroy-table').on('click', events.deleteTable)

  $('#create-player').on('click', events.createPlayer)
  $('#update-player').on('click', events.updatePlayer)
  $('#index-player').on('click', events.indexPlayer)
  $('#destroy-player').on('click', events.deletePlayer)

  $('#create-hand').on('click', events.createHand)
  $('#update-hand').on('click', events.updateHand)
  $('#index-hand').on('click', events.indexHand)
  $('#destroy-hand').on('click', events.deleteHand)
})
