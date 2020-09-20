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
  $('#delete-family-member').on('submit', familyEvents.deleteFamilyMember)
  // $('#view-game-history').on('click', gameEvents.newGameHistory)
  // Custom UI functions
  $('#sign-up-link').on('click', customEvents.linkSignUp)
  $('#sign-in-link').on('click', customEvents.linkSignIn)
  $('#change-pw-link').on('click', customEvents.linkChangePw)
  $('#change-pw-btn').on('click', customEvents.headerChangePw)
})
