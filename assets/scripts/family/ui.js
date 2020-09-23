'use strict'

// Source: https://www.w3schools.com/jquery/jquery_dom_set.asp

const store = require('./../store.js')

const messageTimer = function (message) {
  $('#message').text(message)
  setTimeout(function () {
    $('#message').text('')
  }, 2000)
}

const onAddSuccess = function (response) {
  messageTimer('Family member successfully added')
  $('#add-family-member').trigger('reset')
  $('#add-family-member').hide()
  $('#create-cta').show()
  console.log(response.familyMember.generation)

  if ($('#family-section').is(':visible')) {
    $('.display-family').prepend(`
      <div id="show-list">
      <ul id="family-list-item" data-id=${response.familyMember._id}>
        <li><strong>Name:</strong> ${response.familyMember.firstName}</li>
        <li><strong>Relationship:</strong> ${response.familyMember.relationship}</li>
        <li><strong>Generation:</strong> ${response.familyMember.generation}</li>
        <li><strong>Family Tree:</strong> ${response.familyMember.familyTree}</li>
        <button id="update" class="float-none">Edit</button>
        <button id="delete" class="float-none">Delete</button>
      </ul>

      <form id="delete-family-member" data-id=${response.familyMember._id} data-owner=${response.familyMember.owner}>
        <fieldset>
          <label>Delete entry here</label>
          <input id="delete" class="float-none" type="submit" value="Delete">
        </fieldset>
      </form>

      <form id="update-family-member" class="form-design" data-id=${response.familyMember._id} data-owner=${response.familyMember.owner}>
      <fieldset>
      <input id="add-name" type="text" name="familyMember[firstName]" value="${response.familyMember.firstName}">
      <input id="add-relationship" type="text" name="familyMember[relationship]" value="${response.familyMember.firstName}">
      <input id="add-generation" type="text" name="familyMember[generation]" value="${response.familyMember.firstName}">
      <input id="add-choice" type="text" name="familyMember[familyTree]" value="${response.familyMember.firstName}">
      <input type="submit" value="Add New Family Member">
        <input type="submit" value="Edit">
      </fieldset>
    </form>
    </div>
      `)
  } else {
    return null
  }
}

const onAddFailure = function (error) {
  messageTimer('We could not add a family member')
  console.log(error)
}

const showMemberSuccess = function (response) {
  messageTimer('View your family below')
  $('#family-section').show()

  const showList = function () {
    for (let i = 0; i < response.familyMembers.length; i++) {
      $('.display-family').append(`
        <div id="show-list">
        <ul id="family-list-item" data-id=${response.familyMembers[i]._id}>
          <li><strong>Name:</strong> ${response.familyMembers[i].firstName}</li>
          <li><strong>Relationship:</strong> ${response.familyMembers[i].relationship}</li>
          <li><strong>Generation:</strong> ${response.familyMembers[i].generation}</li>
          <li><strong>Family Tree:</strong> ${response.familyMembers[i].familyTree}</li>
          <button id="update" class="float-none">Edit</button>
          <button id="delete" class="float-none">Delete</button>
        </ul>

        <form id="delete-family-member" data-id=${response.familyMembers[i]._id} data-owner=${response.familyMembers[i].owner}>
          <fieldset>
            <label>Delete entry here</label>
            <input id="delete" class="float-none" type="submit" value="Delete">
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
      </div>
        `)
    }
  }

  showList()
  // $('#toggle-family-view input').attr('value', 'Refresh')
}

const showMemberFailure = function (error) {
  messageTimer('Show FAILED')
  console.log(error)
}

const onDeleteSuccess = function (response) {
  messageTimer('Family member successfully deleted')
  $('#delete-family-member').hide()
  console.log('New famiy member successfully deleted')
}

const onDeleteFailure = function (error) {
  messageTimer('Delete FAILED')
  console.log(error)
}

const updateMemberSuccess = function (response) {
  messageTimer('Family member successfully updated')
  $('#update-family-member').hide()
  console.log('New famiy member successfully updated')
}

const updateMemberFailure = function (error) {
  messageTimer('Update FAILED')
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
