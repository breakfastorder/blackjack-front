
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

const onGetUserNameSuccess = function (data) {
  console.log(data.user.username)
}

const onGetUserNameFailure = function (data) {
  console.log('get username failed')
}

const onMakeUserNameSuccess = function (data) {
  console.log(data)
}

const onMakeUserNameFailure = function (data) {
  console.log('make username failed')
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
  onGetUserNameSuccess,
  onGetUserNameFailure,
  onMakeUserNameSuccess,
  onMakeUserNameFailure
}
