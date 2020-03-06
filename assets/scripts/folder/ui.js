
'use strict'

const store = require('./../store')

const onSignUpSuccess = function (data) {
  $('#auth-messages').html(data.user.email + ' has signed up successfully')

  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const onSignUpFailure = function (data) {
  $('#auth-messages').html('Sign up failed')

  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const onSignInSuccess = function (data) {
  store.user = data.user
  $('#auth-messages').html(data.user.email + ' has signed in successfully')

  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const onSignInFailure = function (data) {
  $('#auth-messages').html('Sign in failed')

  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const onSignOutSuccess = function (data) {
  store.user = null
  $('#auth-messages').html('User has signed out successfully')
}

const onSignOutFailure = function (data) {
  $('#auth-messages').html('Sign out attempt failed, please try again')
}

const onChangePasswordSuccess = function (data) {
  $('#auth-messages').html(store.user.email + ' has changed password successfully')
}

const onChangePasswordFailure = function (data) {
  $('#auth-messages').html('Attempt to change password failed, please try again')
}

const onCreateHandSuccess = function (data) {
  console.log(data)
  store.handId = data.id
  console.log('created hand,')
}

const onCreateHandFailure = function (data) {
  console.log('failed to create hand')
}

const onUpdateHandSuccess = function (data) {
  console.log(data)
  console.log('updated hand')
}

const onUpdateHandFailure = function (data) {
  console.log('update failed')
}

const onIndexHandSuccess = function (data) {
  console.log(data)
  console.log('index worked')
}

const onIndexHandFailure = function (data) {
  console.log('index hand didnt work')
}

const onDeleteHandSuccess = function (data) {
  console.log(data)
  console.log('delete hand worked')
}

const onDeleteHandFailure = function (data) {
  console.log('delete hand failed')
}

// ----------------------------------------

const onCreatePlayerSuccess = function (data) {
  console.log(data)
  store.handId = data.id
  console.log('created player')
}

const onCreatePlayerFailure = function (data) {
  console.log('failed to create player')
}

const onUpdatePlayerSuccess = function (data) {
  console.log(data)
  console.log('updated player')
}

const onUpdatePlayerFailure = function (data) {
  console.log('uplaye pdate failed')
}

const onIndexPlayerSuccess = function (data) {
  console.log(data)
  console.log('index worked player')
}

const onIndexPlayerFailure = function (data) {
  console.log('index player didnt work')
}

const onDeletePlayerSuccess = function (data) {
  console.log(data)
  console.log('delete player worked')
}

const onDeletePlayerFailure = function (data) {
  console.log('delete player failed')
}

// ----------------------------------------

const onCreateTableSuccess = function (data) {
  console.log(data)
  console.log('FUCK YES')
  store.tableId = data.id
  store.tableData = data
}

const onCreateTableFailure = function (data) {
  console.log('didnt work wah wah')
}

const onUpdateTableSuccess = function (data) {
  console.log(data)
  console.log('updated table worked bitches')
}

const onUpdateTableFailure = function (data) {
  console.log('wah wah update didnt work')
}

const onIndexTableSuccess = function (data) {
  console.log(data)
  console.log('index table worked')
}

const onIndexTableFailure = function (data) {
  console.log('index hand didnt work')
}

const onDeleteTableSuccess = function (data) {
  console.log(data)
  console.log('delete hand worked')
}

const onDeleteTableFailure = function (data) {
  console.log('delete hand failed')
}





module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  // --------------------
  onCreateTableSuccess,
  onCreateTableFailure,
  onUpdateTableSuccess,
  onUpdateTableFailure,
  onIndexTableSuccess,
  onIndexTableFailure,
  onDeleteTableSuccess,
  onDeleteTableFailure,
  // --------------------
  onCreatePlayerSuccess,
  onCreatePlayerFailure,
  onUpdatePlayerSuccess,
  onUpdatePlayerFailure,
  onIndexPlayerSuccess,
  onIndexPlayerFailure,
  onDeletePlayerSuccess,
  onDeletePlayerFailure,
  // --------------------
  onCreateHandSuccess,
  onCreateHandFailure,
  onUpdateHandSuccess,
  onUpdateHandFailure,
  onIndexHandSuccess,
  onIndexHandFailure,
  onDeleteHandSuccess,
  onDeleteHandFailure
}
