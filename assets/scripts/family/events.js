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

// const newTrackGamePiece = function (event) {
//   event.preventDefault()
//   // get position and player
//   const selectedSquare = event.target
//   const currentPlayer = function () {
//     if ($(selectedSquare).text() === 'X') {
//       return $(selectedSquare).text()
//     } else if ($(selectedSquare).text() === 'O') {
//       return $(selectedSquare).text()
//     } else {
//       $('#message').text('Please try again.')
//     }
//   }
//
//   // start of test
//   const checkBlankSquare = $(selectedSquare).text()
//   // prevent user from overriding square
//   if (checkBlankSquare === '') {
//     // display game piece
//     $(selectedSquare).text(turn)
//     if (turn === 'O') {
//       turn = 'X'
//     } else {
//       turn = 'O'
//       $('#message').text('This square is occupied. Try again.')
//     }
//   }
//   $('#role').text(turn)
//
//   // end of test
//
//   const gameSquare = $('.game-square')
//   const checkGameWinner = function (checkStatus) {
//     const winningMessage = function () {
//       $('#message').text('Player ' + $(selectedSquare).text() + ': YOU ARE THE WINNER!!!')
//       $('#game-board').hide()
//     }
//     const winningMessageTie = function () {
//       $('#message').text('Players X & O: There is a TIE')
//       $('#game-board').hide()
//     }
//
//     // checking winning combinations
//     // .text not working so had to switch to .innerText
//     if (gameSquare[0].innerText === gameSquare[1].innerText && gameSquare[0].innerText === gameSquare[2].innerText && gameSquare[0].innerText !== '') {
//       winningMessage()
//       return checkStatus
//
//       // middle row winner
//     } else if (gameSquare[3].innerText === gameSquare[4].innerText && gameSquare[3].innerText === gameSquare[5].innerText && gameSquare[3].innerText !== '') {
//       winningMessage()
//       return checkStatus
//
//       // bottom row
//     } else if (gameSquare[6].innerText === gameSquare[7].innerText && gameSquare[6].innerText === gameSquare[8].innerText && gameSquare[6].innerText !== '') {
//       winningMessage()
//       return checkStatus
//       // left column
//     } else if (gameSquare[0].innerText === gameSquare[3].innerText && gameSquare[0].innerText === gameSquare[6].innerText && gameSquare[0].innerText !== '') {
//       winningMessage()
//       return checkStatus
//
//       // middle column
//     } else if (gameSquare[1].innerText === gameSquare[4].innerText && gameSquare[1].innerText === gameSquare[7].innerText && gameSquare[1].innerText !== '') {
//       winningMessage()
//       return checkStatus
//
//       // last column
//     } else if (gameSquare[2].innerText === gameSquare[5].innerText && gameSquare[2].innerText === gameSquare[8].innerText && gameSquare[2].innerText !== '') {
//       winningMessage()
//       return checkStatus
//
//       // diagonal going right
//     } else if (gameSquare[0].innerText === gameSquare[4].innerText && gameSquare[0].innerText === gameSquare[8].innerText && gameSquare[0].innerText !== '') {
//       winningMessage()
//       return checkStatus
//
//       // diagonal going left
//     } else if (gameSquare[2].innerText === gameSquare[4].innerText && gameSquare[2].innerText === gameSquare[6].innerText && gameSquare[2].innerText !== '') {
//       winningMessage()
//       return checkStatus
//     } else if (gameSquare[0].innerText !== '' && gameSquare[1].innerText !== '' && gameSquare[2].innerText !== '' && gameSquare[3].innerText !== '' && gameSquare[4].innerText !== '' && gameSquare[5].innerText !== '' && gameSquare[6].innerText !== '' && gameSquare[7].innerText !== '' && gameSquare[8].innerText !== '') {
//       winningMessageTie()
//       return gameIsOver
//     }
//     // end of checkGameWinner
//   }
//
//   const gameStatus = checkGameWinner(gameIsOver)
//
//   api.trackGame(selectedSquare.dataset.cellIndex, currentPlayer, gameStatus)
//     .then(ui.gameTrackingSuccess)
//     .catch(ui.gameTrackingFailure)
// // end of newTrackGamePiece
// }

// const newGameHistory = function (event) {
//   event.preventDefault()
//   const getGameHistory = event.target
//   const data = getFamilyData(getGameHistory)
//
//   api.gameHistory(data)
//     .then(ui.gameHistorySuccess)
//     .catch(ui.gameHistoryFailure)
// }

module.exports = {
  addFamilyMember: addFamilyMember,
  displayFamilyMember: displayFamilyMember
}
