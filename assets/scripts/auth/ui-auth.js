
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
  store.user.username = data.user.email

  $('#sign-up').hide()
  $('#sign-in').hide()

  $('#sign-out').show()
  $('#change-password').show()

  $('#get-name').show()
  $('#make-username').show()

  $('#create-hand').show()
  $('#update-hand').show()
  $('#index-hand').show()
  $('#destroy-hand').show()
  $('#destroy-all-hand').show()

  $('#create-table').show()
  $('#update-table').show()
  $('#index-table').show()
  $('#destroy-table').show()
  $('#join-table').show()
  $('#leave-table-user').show()
  $('#leave-table-owner').show()
  $('#destroy-all-table').show()


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
  $('#sign-up').show()
  $('#sign-in').show()

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
