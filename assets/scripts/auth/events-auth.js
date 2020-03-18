'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api-auth')
const ui = require('./ui-auth')
// const store = require('./../store')

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

const getUsername = function (event) {
  event.preventDefault()

  api.getUsername()
    .then(ui.onGetUserNameSuccess)
    .catch(ui.onGetUserNameFailure)
}

const makeUsername = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.makeUsername(data)
    .then(ui.onMakeUserNameSuccess)
    .catch(ui.onMakeUserNameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  getUsername,
  makeUsername
}
