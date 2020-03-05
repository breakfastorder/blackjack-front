
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
  $('#create-hand').on('click', events.createHand)
  $('#update-hand').on('click', events.updateHand)
})
