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

let formMessage = ''
let messageTimer = function (message) {
  $('#message').text(message)
  setTimeout(function () {
    $('#message').text('')
  }, 3000)
}

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#message').css('border', 'solid 5px #fff')
  $('#sign-in').show()
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
  $('#change-password').hide()
}
const onSignUpFailure = function (error) {
  $('#message').text('Sign up failed. Please try again.')
  $('#message').css('border', 'solid 5px #fff')
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
  $('#create-famiy-member').show()
  $('.view-switch-option').show()
  $('.tree').show()
  if ($('#change-password').is(':visible')) {
    $('.tree').hide()
    $('.sign-out').hide()
    $('#message-change-password').text('You have signed in. Please change your password')
  } else {
    $('.tree').show()
    $('.sign-out').show()
  }
}
const onSignInFailure = function (error) {
  $('#message').text('Sign in failed. Please try again.')
  $('#message').css('border', 'solid 5px #fff')
  if (error.statusText == 'Unauthorized') {
    $('#message-sign-in').text('You have entered the wrong credentials. Try again.')
    $('#sign-in-email').css('background', 'rgba(240, 52, 52, .5)')
    $('#sign-in-password').css('background', 'rgba(240, 52, 52, .5)')
    $('input').on('focus', function () {
      $('#sign-in-email').css('background', 'rgb(255, 255, 255)')
      $('#sign-in-password').css('background', 'rgb(255, 255, 255)')
    })
  } else {
    $('#message').text('Sign in failed. Please try again.')
    $('#message').css('border', 'solid 5px #fff')
  }
  messageReset(error)
}
const onSignOutSuccess = function (response) {
  formMessage = 'You are logged out'
  messageTimer(formMessage)
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#sign-up-link').show()
  $('#change-pw-link').show()
  $('#change-pw-btn').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#create-famiy-member').hide()
  $('.view-switch-option').hide()
  $('.tree').hide()
  messageReset()
}

const onSignOutFailure = function (error) {
  $('#message').text('Sign out failed. Please try again.')
  $('input').on('focus', function () {
    $('#message-container').hide()
  })
  messageReset(error)
}
const onChangePwSuccess = function () {
  $('#message').show()
  $('#message').text('Your password was successfully changed. You are logged in.')
  $('#message').css('border', 'solid 5px #fff')
  $('#sign-in').show()
  $('#change-password').trigger('reset')
  $('#change-password').hide()
  $('#sign-in').hide()
}
const onChangePwFailure = function (error) {
  $('#message').text('Password could not be changed. Please try again.')
  $('#message').css('border', 'solid 5px #fff')
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
