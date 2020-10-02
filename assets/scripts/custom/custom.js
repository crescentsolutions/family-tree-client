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
const createCallToAction = function () {
  $('#add-family-member').show()
  $('#create-cta').hide()
}

const familyListEditOption = function () {
  const targetOfClick = event.target.dataset.id
  $('#update-family-member[data-id="' + targetOfClick + '"]').show()
  $('#delete[data-id="' + targetOfClick + '"]').hide()
  $('#update[data-id="' + targetOfClick + '"]').hide()
  $('#delete-family-member[data-id="' + targetOfClick + '"]').hide()
}
const familyListDeleteOption = function (event) {
  const targetOfClick = event.target.dataset.id
  $('#delete-family-member[data-id="' + targetOfClick + '"]').show()
  $('#update-family-member[data-id="' + targetOfClick + '"]').hide()
  $('#delete[data-id="' + targetOfClick + '"]').hide()
  $('#update[data-id="' + targetOfClick + '"]').hide()
}

module.exports = {
  linkSignUp: linkSignUp,
  linkSignIn: linkSignIn,
  linkChangePw: linkChangePw,
  headerChangePw: headerChangePw,
  createCallToAction: createCallToAction,
  familyListEditOption: familyListEditOption,
  familyListDeleteOption: familyListDeleteOption
}
