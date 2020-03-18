'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api-hands')
const ui = require('./ui-hands')
const store = require('./../store')

const createHand = function (user, data) {
  event.preventDefault()

  // "hand": {
  //     "cards": "'"${CARDS}"'",
  //     "current_bet": "'"${BET}"'"
  //   }
  const hands = {
    hand: {
      cards: '123',
      current_bet: 0,
      owner_name: store.user.email
    }
  }
  // const currentUser = store.tableData.user1_id
  console.log(hands)
  // sending it data so it knows what hand to update
  api.createHand(hands)
    .then(ui.onCreateHandSuccess)
    .catch(ui.onCreateHandFailure)
}

const updateHand = function (data) {
  event.preventDefault()

  const hands = {
    hand: {
      cards: '123',
      current_bet: 100,
      owner_name: store.user.email
    }
  }
  // sending it data so it knows what hand to update
  api.updateHand(hands)
    .then(ui.onUpdateHandSuccess)
    .catch(ui.onUpdateHandFailure)
}

const indexHand = function (event) {
  event.preventDefault()

  api.indexHand()
    .then(ui.onIndexHandSuccess)
    .catch(ui.onIndexHandFailure)
}

const deleteHand = function (event) {
  event.preventDefault()

  api.deleteHand()
    .then(ui.onDeleteHandSuccess)
    .catch(ui.onDeleteHandFailure)
}

const deleteAllHand = function (event) {
  event.preventDefault()

  api.deleteAllHand()
    .then(ui.onDeleteHandSuccess)
    .catch(ui.onDeleteHandFailure)
}

module.exports = {
  createHand,
  updateHand,
  indexHand,
  deleteHand,
  deleteAllHand
}
