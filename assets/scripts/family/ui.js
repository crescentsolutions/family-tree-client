'use strict'

const store = require('./../store.js')

const onAddSuccess = function (response) {
  $('#message').text('Family member successfully added')
  console.log('New famiy member successfully added')
}
const onAddFailure = function (error) {
  $('#message').text('Add FAILED')
  console.log(error)
}

const showMemberSuccess = function (response) {
  $('#message').text('Show Success')
  const showList = function () {
    for (let i = 0; i < response.familyMembers.length + 1; i++) {
      $('.display-family').text(i + 'Name: ' + response.familyMembers[i].firstName + ', ' + 'Relationship: ' + response.familyMembers[i].relationship + ', ' + 'Generation: ' + response.familyMembers[i].generation + ', ' + 'Family Tree: ' + response.familyMembers[i].familyTree + ', ')
    }
  }
  showList()
  // $('.display-family').text(response)
  console.log(response)
  console.log(response.familyMembers[0].firstName)
}
const showMemberFailure = function (error) {
  $('#message').text('Show FAILED')
  console.log(error)
}

module.exports = {
  onAddSuccess,
  onAddFailure,
  showMemberSuccess,
  showMemberFailure
}
