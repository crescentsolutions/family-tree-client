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
  console.log('button was clicked')
}
const familyListDeleteOption = function () {
  console.log('button was clicked')
}

// const familyOptionsClicked = function () {
// console.log('button was clicked')
// $('#family-member-form').on('click', '#list-item-options', function () {
//
// })
// $('#family-list-item').append(`
//   <ul id="menu-of-options">
//     <li class="edit-option">Edit</li>
//     <li class="delete-option">Delete</li>
//   </ul>`)
//
// if (listOptionDeleteClick) {
//   $('#list-item-options').hide()
//   $('#menu-of-options').hide()
//   $('#family-list-item').append(`
//     <input id="delete" type="submit" value="Delete">
//     `)
// } else if (listOptionEditClick) {
//   $('#list-item-options').hide()
//   $('#menu-of-options').hide()
//   $('#family-list-item').append(`
//     <input id="update" type="submit" value="Edit">
//     `)
// }
// }

module.exports = {
  linkSignUp: linkSignUp,
  linkSignIn: linkSignIn,
  linkChangePw: linkChangePw,
  headerChangePw: headerChangePw,
  createCallToAction: createCallToAction,
  familyListEditOption: familyListEditOption,
  familyListDeleteOption: familyListDeleteOption
}
