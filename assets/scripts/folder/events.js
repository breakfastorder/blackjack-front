'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')


const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const createHand = function (user, data) {
  event.preventDefault()

  // "hand": {
  //     "cards": "'"${CARDS}"'",
  //     "current_bet": "'"${BET}"'"
  //   }
  const hands = {
    hand: {
      cards: '',
      current_bet: 0
    }
  }
  // const currentUser = store.tableData.user1_id
  console.log(store.tableData)
  // sending it data so it knows what hand to update
  api.createHand(1, hands)
    .then(ui.onCreateHandSuccess)
    .catch(ui.onCreateHandFailure)
}

const updateHand = function (data) {
  event.preventDefault()

  const hands = {
    hand: {
      cards: '',
      current_bet: 100
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

const makeTable = function (event) {
  event.preventDefault()
  // console.log(store.user)
  const table = {
    table: {
      user1_id: store.user.id,
      user2_id: null,
      user3_id: null,
      user4_id: null,
      deck: 'A2345678910JQK',
      total_bet: 0,
      turn_id: store.user.id
    }
  }
  api.createTable(table)
    .then(ui.onCreateTableSuccess)
    .catch(ui.onCreateTableFailure)
}

const makeTablePopulated = function (event) {
  event.preventDefault()
  // console.log(store.user)
  const table = {
    table: {
      user1_id: store.user.id,
      user2_id: 2,
      user3_id: 1,
      user4_id: null,
      deck: 'A2345678910JQK',
      total_bet: 0,
      turn_id: store.user.id
    }
  }
  api.createTablePopulated(table)
    .then(ui.onCreateTableSuccess)
    .catch(ui.onCreateTableFailure)
}

const updateTable = function (event) {
  event.preventDefault()

  const table = {
    table: {
      user1_id: store.user.id,
      user2_id: null,
      user3_id: null,
      user4_id: null,
      deck: 'A2345678910JQK',
      total_bet: 100,
      turn_id: store.user.id
    }
  }
  api.updateTable(table)
    .then(ui.onUpdateTableSuccess)
    .catch(ui.onUpdateTableFailure)
}

const indexTable = function (event) {
  event.preventDefault()

  api.indexTable()
    .then(ui.onIndexTableSuccess)
    .catch(ui.onIndexTableFailure)
}

const deleteTable = function (event) {
  event.preventDefault()

  api.deleteTable()
    .then(ui.onDeleteTableSuccess)
    .catch(ui.onDelteTableFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  makeTable,
  makeTablePopulated,
  updateTable,
  indexTable,
  deleteTable,
  createHand,
  updateHand,
  indexHand,
  deleteHand
}
