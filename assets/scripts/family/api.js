'use strict'

const config = require('./../config')
const store = require('../store')
const familyMemberStore = require('./../family-store.js')

const newMember = function (data) {
  console.log('This is from API: Create')
  console.log(data)
  console.log(data.familyMember)
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

const deleteMember = function (resourceID) {
  console.log('my token is ', store.user.token)
  return $.ajax({
    url: config.apiUrl + '/family-members/' + resourceID,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

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
  getMembers: getMembers,
  deleteMember: deleteMember
}
