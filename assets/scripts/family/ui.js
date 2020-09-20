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
    for (let i = 0; i < response.familyMembers.length; i++) {
      $('.display-family').append(`<form id="edit-family-member">
        <fieldset>
          <input type="submit" value="Edit">
        </fieldset>
      </form>
      <form id="delete-family-member">
        <fieldset>
          <input type="submit" value="Delete">
        </fieldset>
      </form>
      <p>Name: ${response.familyMembers[i].firstName}, Relationship: ${response.familyMembers[i].relationship}, Generation: ${response.familyMembers[i].generation}, Family Tree: ${response.familyMembers[i].familyTree}</p>`)
    }
  }
  showList()
  // $('.display-family').text(response)
  console.log('From UI.js: Show Member Success')
  console.log(response)
  console.log(response.familyMembers[0].firstName)
}
const showMemberFailure = function (error) {
  $('#message').text('Show FAILED')
  console.log(error)
}

const onDeleteSuccess = function (response) {
  $('#message').text('Family member successfully deleted')
  console.log('New famiy member successfully deleted')
}
const onDeleteFailure = function (error) {
  $('#message').text('Delete FAILED')
  console.log('Delete FAILED')
  console.log(error)
}

module.exports = {
  onAddSuccess,
  onAddFailure,
  showMemberSuccess,
  showMemberFailure,
  onDeleteSuccess,
  onDeleteFailure
}
