'use strict'

const config = require('./../config')
const store = require('../store')

const newMember = function (data) {
  return $.ajax({
    url: config.apiUrl + '/family-members',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const getMembers = function (data) {
  return $.ajax({
    url: config.apiUrl + '/family-members',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}
//
// const signOut = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/sign-out',
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }
//
// const changePw = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/change-password',
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data: data
//   })
// }

module.exports = {
  newMember: newMember,
  getMembers: getMembers
}
