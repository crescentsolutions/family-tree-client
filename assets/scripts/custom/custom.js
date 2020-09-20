'use strict'

// Source: https://stackoverflow.com/questions/3428766/jquery-show-for-5-seconds-then-hide

const linkSignUp = function () {
  $('#sign-up').show()
  $('#sign-in').hide()
  $('#change-password').hide()
}
const linkSignIn = function () {
  $('#sign-up').hide()
  $('#sign-in').show()
}
const linkChangePw = function () {
  // $('#sign-in').hide()
  $('#message').hide()
  $('#message-sign-in').text('Please sign in before you change your password')
  $('#message-change-password').text('You must sign in first')
  $('#change-pw-link').hide()
  $('#change-password').show()
  $('#change-password').css('margin-top', '20px')
}
const headerChangePw = function () {
  // $('#change-password').show(function () {
}

module.exports = {
  linkSignUp: linkSignUp,
  linkSignIn: linkSignIn,
  linkChangePw: linkChangePw,
  headerChangePw: headerChangePw
}
