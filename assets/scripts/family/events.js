'use strict'

const getFamilyData = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const addFamilyMember = function (event) {
  event.preventDefault()
  const submitFamilyMember = event.target
  const data = getFamilyData(submitFamilyMember)

  api.newMember(data)
    .then(ui.onAddSuccess)
    .catch(ui.onAddFailure)
}

const displayFamilyMember = function (event) {
  event.preventDefault()
  const submitFamilyMember = event.target
  const data = getFamilyData(submitFamilyMember)

  api.getMembers(data)
    .then(ui.showMemberSuccess)
    .catch(ui.showMemberFailure)
}

const deleteFamilyMember = function (event) {
  event.preventDefault()
  // const submitFamilyMember = event.target
  $('#message').text('Delete button was clicked')

  const targetOfClick = event.target.dataset.id
  $('#show-list[data-id="' + targetOfClick + '"]').hide()

  // submitFamilyMember displays the ID for this object
  const submitFamilyMemberId = $(event.target).data('id')

  api.deleteMember(submitFamilyMemberId)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)

  $(event.target).hide()
}

const updateFamilyMember = function (event) {
  event.preventDefault()
  $('#message').text('Family member is being updated')
  const submitFamilyMember = event.target
  const data = getFamilyData(submitFamilyMember)

  const submitFamilyMemberId = $(event.target).data('id')

  api.updateMember(submitFamilyMemberId, data)
    .then(ui.updateMemberSuccess)
    .catch(ui.updateMemberFailure)
}

module.exports = {
  addFamilyMember: addFamilyMember,
  displayFamilyMember: displayFamilyMember,
  deleteFamilyMember: deleteFamilyMember,
  updateFamilyMember: updateFamilyMember
}
