'use strict'

// Source: https://www.w3schools.com/jquery/jquery_dom_set.asp

const store = require('./../store.js')

const onAddSuccess = function (response) {
  $('#message').text('Family member successfully added')
  $('#add-family-member').trigger('reset')

  if ($('#family-section').is(':visible')) {
    $('#family-member-form').append(`
      <form id="family-member-form" data-id=${response.familyMember._id} data-owner=${response.familyMember.owner}>
        <fieldset>
          <p>Name: ${response.familyMember.firstName}, Relationship: ${response.familyMember.relationship}, Generation: ${response.familyMember.generation}, Family Tree: ${response.familyMember.familyTree}</p>
          <input type="submit" value="Delete">
        </fieldset>
      </form>
      `)
  } else {
    return null
  }
}

const onAddFailure = function (error) {
  $('#message').text('We could not add a family member')
  console.log(error)
}

const showMemberSuccess = function (response) {
  $('#message').text('View your family below')
  $('#family-section').show()

  const showList = function () {
    for (let i = 0; i < response.familyMembers.length; i++) {
      $('.display-family').append(`
        <ul id="family-list-item" data-id=${response.familyMembers[i]._id}>
          <li>Name: ${response.familyMembers[i].firstName},</li>
          <li>Relationship: ${response.familyMembers[i].relationship},</li>
          <li>Generation: ${response.familyMembers[i].generation},</li>
          <li>Family Tree: ${response.familyMembers[i].familyTree}</li>
          <button id="update">Edit</button>
          <button id="delete">Delete</button>
        </ul>

        <form id="delete-family-member" data-id=${response.familyMembers[i]._id} data-owner=${response.familyMembers[i].owner}>
          <fieldset>
            <input id="delete" type="submit" value="Delete">
          </fieldset>
        </form>

        <form id="update-family-member" class="form-design" data-id=${response.familyMembers[i]._id} data-owner=${response.familyMembers[i].owner}>
        <fieldset>
        <input id="add-name" type="text" name="familyMember[firstName]" value="${response.familyMembers[i].firstName}">
        <input id="add-relationship" type="text" name="familyMember[relationship]" value="${response.familyMembers[i].firstName}">
        <input id="add-generation" type="text" name="familyMember[generation]" value="${response.familyMembers[i].firstName}">
        <input id="add-choice" type="text" name="familyMember[familyTree]" value="${response.familyMembers[i].firstName}">
        <input type="submit" value="Add New Family Member">
          <input type="submit" value="Edit">
        </fieldset>
      </form>
        `)
    }
  }

  showList()
  // $('#toggle-family-view input').attr('value', 'Refresh')
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
  console.log(error)
}

const updateMemberSuccess = function (response) {
  $('#message').text('Family member successfully updated')
  console.log('New famiy member successfully updated')
}

const updateMemberFailure = function (error) {
  $('#message').text('Update FAILED')
  console.log(error)
}

module.exports = {
  onAddSuccess,
  onAddFailure,
  showMemberSuccess,
  showMemberFailure,
  onDeleteSuccess,
  onDeleteFailure,
  updateMemberSuccess,
  updateMemberFailure
}
