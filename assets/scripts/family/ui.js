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
        <form id="family-member-form" data-id=${response.familyMembers[i]._id} data-owner=${response.familyMembers[i].owner}>
          <fieldset>
            <p>Name: ${response.familyMembers[i].firstName}, Relationship: ${response.familyMembers[i].relationship}, Generation: ${response.familyMembers[i].generation}, Family Tree: ${response.familyMembers[i].familyTree}</p>
            <input type="submit" value="Delete">
          </fieldset>
        </form>
        `)
    }
  }

//   <form id="edit-family-member" data-id=${response.familyMembers[i].id}>
//   <fieldset>
//     <input type="submit" value="Edit">
//   </fieldset>
// </form>
// <form id="delete-family-member">
//   <fieldset>
//     <input type="submit" value="Delete">
//   </fieldset>
// </form>

  showList()
  // $('#toggle-family-view input').attr('value', 'Refresh')
}

const showMemberFailure = function (error) {
  $('#message').text('Show FAILED')
  console.log(error)
}

// const onDeleteSuccess = function (response) {
//   $('#message').text('Family member successfully deleted')
//   console.log('New famiy member successfully deleted')
// }
// const onDeleteFailure = function (error) {
//   $('#message').text('Delete FAILED')
//   console.log('Delete FAILED')
//   console.log(error)
// }

module.exports = {
  onAddSuccess,
  onAddFailure,
  showMemberSuccess,
  showMemberFailure
  // onDeleteSuccess,
  // onDeleteFailure
}
