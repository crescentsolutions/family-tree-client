'use strict'

const config = require('./../config')
const store = require('../store')
// const familyMemberStore = require('./../family-store.js')

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

const deleteMember = function (resourceID) {
  return $.ajax({
    url: config.apiUrl + '/family-members/' + resourceID,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateMember = function (resourceID, data) {
  return $.ajax({
    url: config.apiUrl + '/family-members/' + resourceID,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  newMember: newMember,
  getMembers: getMembers,
  deleteMember: deleteMember,
  updateMember: updateMember
}
