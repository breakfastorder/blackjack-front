
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
  ('#auth-messages').html('Sign in failed')

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
  console.log('created hand, jack me off')
}

const onCreateHandFailure = function (data) {
  console.log('failed to create hand')
}

const onUpdateHandSuccess = function (data) {
  console.log(data)
  console.log('updated hand, now can jack me off in a different way')
}

const onUpdateHandFailure = function (data) {
  console.log('update failed')
}

const onCreateTableSuccess = function (data) {
  console.log(data)
  console.log('FUCK YES')
  store.tableId = data.id
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

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onCreateTableSuccess,
  onCreateTableFailure,
  onUpdateTableSuccess,
  onUpdateTableFailure,
  onCreateHandSuccess,
  onCreateHandFailure,
  onUpdateHandSuccess,
  onUpdateHandFailure
}
