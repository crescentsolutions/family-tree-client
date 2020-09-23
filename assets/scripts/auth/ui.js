'use strict'

const store = require('./../store.js')

const messageReset = function () {
  $('input').on('focus', function () {
    $('#message').text('')
    $('#message-sign-up').text('')
    $('#message-sign-in').text('')
    $('#message-change-password').text('')
  })
}

const messageTimer = function (message) {
  $('#message').text(message)
  setTimeout(function () {
    $('#message').text('')
  }, 2000)
}

const onSignUpSuccess = function (response) {
  messageTimer('Thanks for signing up ' + response.user.email)
  $('#sign-in').show()
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
  $('#change-password').hide()
}
const onSignUpFailure = function (error) {
  messageTimer('Sign up failed. Please try again.')
  $('input').on('focus', function () {
    $('#message-container').hide()
    $('#message').hide()
  })
  $('#sign-up').trigger('reset')
  if (error.statusText == 'Unprocessable Entity') {
    $('#message-sign-up').text('This account already exists.')
  }
  messageReset(error)
}
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#sign-in').trigger('reset')
  $('#message-sign-in').text('')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-pw-btn').show()
  if ($('#change-password').is(':visible')) {
    $('.sign-out').hide()
    $('#message-change-password').text('You have signed in. Please change your password')
    $('.view-switch-option').hide()
    $('.tree').hide()
    $('#create-cta').hide()
  } else {
    $('.sign-out').show()
    $('.view-switch-option').show()
    $('.tree').show()
    $('#create-cta').show()
  }
}
const onSignInFailure = function (error) {
  messageTimer('Sign in failed. Please try again.')
  if (error.statusText === 'Unauthorized') {
    messageTimer('You have entered the wrong credentials. Try again.')
    $('#sign-in-email').css('background', 'rgba(240, 52, 52, .5)')
    $('#sign-in-password').css('background', 'rgba(240, 52, 52, .5)')
    $('input').on('focus', function () {
      $('#sign-in-email').css('background', 'rgb(255, 255, 255)')
      $('#sign-in-password').css('background', 'rgb(255, 255, 255)')
    })
  } else {
    messageTimer('Sign in failed. Please try again.')
  }
  messageReset(error)
}
const onSignOutSuccess = function (response) {
  messageTimer('You are logged out')
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#sign-up-link').show()
  $('#change-pw-link').show()
  $('#change-pw-btn').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.protected').hide()
  $('.dashboard').hide()
  messageReset()
}

const onSignOutFailure = function (error) {
  messageTimer('Sign out failed. Please try again.')
  $('input').on('focus', function () {
    $('#message-container').hide()
  })
  messageReset(error)
}
const onChangePwSuccess = function () {
  $('#message').show()
  messageTimer('Your password was successfully changed. You are logged in.')
  $('#sign-in').show()
  $('#change-password').trigger('reset')
  $('#change-password').hide()
  $('#sign-in').hide()
}
const onChangePwFailure = function (error) {
  messageTimer('Password could not be changed. Please try again.')
  messageReset(error)
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePwSuccess,
  onChangePwFailure
}
