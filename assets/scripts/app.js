'use strict'

// Source: https://github.com/crescentsolutions/tic-tac-toe

const authEvents = require('./auth/events')
const familyEvents = require('./family/events')
const customEvents = require('./custom/custom')

$(() => {
  // Auth
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePw)
  // Family
  $('#add-family-member').on('submit', familyEvents.addFamilyMember)
  $('#toggle-family-view').on('submit', familyEvents.displayFamilyMember)
  $('.display-family').on('submit', '#delete-family-member', familyEvents.deleteFamilyMember)
  $('.display-family').on('submit', '#update-family-member', familyEvents.updateFamilyMember)
  // Custom UI functions
  $('#sign-up-link').on('click', customEvents.linkSignUp)
  $('#sign-in-link').on('click', customEvents.linkSignIn)
  $('#change-pw-link').on('click', customEvents.linkChangePw)
  $('#change-pw-btn').on('click', customEvents.headerChangePw)
  $('#create-button-cta').on('click', customEvents.createCallToAction)
  $('.display-family').on('click', 'ul button#update', customEvents.familyListEditOption)
  $('.display-family').on('click', 'ul button#delete', customEvents.familyListDeleteOption)
})
