
'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const auth = require('./auth/events-auth')
const hands = require('./hands/events-hands')
const table = require('./tables/events-tables')
const all = require('./allEvents')

$(() => {
  $('#sign-out').hide()
  $('#change-password').hide()

  $('#get-name').hide()
  $('#make-username').hide()

  $('#create-hand').hide()
  $('#update-hand').hide()
  $('#index-hand').hide()
  $('#destroy-hand').hide()
  $('#destroy-all-hand').hide()

  $('#create-table').hide()
  $('#update-table').hide()
  $('#index-table').hide()
  $('#destroy-table').hide()
  $('#join-table').hide()
  $('#leave-table-user').hide()
  $('#leave-table-owner').hide()
  $('#destroy-all-table').hide()

  $('#player-one-header').hide()
  $('#player-two-header').hide()
  $('#player-three-header').hide()
  $('#player-four-header').hide()

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

  $('#create-table').on('click', all.createTable)
  $('#update-table').on('click', table.updateTable)
  $('#index-table').on('click', table.indexTable)
  $('#destroy-table').on('click', table.deleteTable)
  $('#join-table').on('submit', all.joinTable)
  // $('#leave-table-user').on('submit', table.leaveTableAsUser)
  $('#leave-table-user').on('click', all.leaveTableAsUser)
  $('#leave-table-owner').on('submit', table.leaveTableAsOwner)
  $('#destroy-all-table').on('click', table.deleteAllTable)

  $('#deal-table').on('click', all.startGameAndDeal)
  $('#deal-player').on('click', all.dealPlayer)

  $('#deal-player-one').on('click', all.dealPlayer)
  $('#deal-player-two').on('click', all.dealPlayer)
  $('#deal-player-three').on('click', all.dealPlayer)
  $('#deal-player-four').on('click', all.dealPlayer)

  $('#delete-user-hands').on('click', all.deleteUserHands)
})
