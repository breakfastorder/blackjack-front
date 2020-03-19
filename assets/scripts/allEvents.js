const getFormFields = require('./../../lib/get-form-fields')

const authApi = require('./auth/api-auth')
const authUi = require('./auth/ui-auth')

const handsApi = require('./hands/api-hands')
const handsUi = require('./hands/ui-hands')

const tableApi = require('./tables/api-tables')
const tableUi = require('./tables/ui-tables')

const store = require('./store')

const createTable = function (user, data) {
  event.preventDefault()

  let gameId = 1
  // let hostId = Math.floor(Math.random() * 1001)
  tableApi.checkHostId()
    .then(numbers => {
      console.log('in numbers')
      let newNum = false
      while (newNum === false) {
        // will run until the numbers is different
        // interate through for array of tables
        // if the hostId ever equals a already existing one
        // remake the id, and break out of the for loop
        // which will re iterate through the array looking for unique numbers
        // otherwise, if it gets all the way through the array
        // then terminate the while loop, as its number is unique

        const array = numbers.tables
        for (let i = 0; i < array.length; i++) {
          if (array[i].host_id === gameId) {
            // hostId = Math.floor(Math.random() * 1001)
            gameId = Math.floor(Math.random() * 10)
            console.log('remaking number')
            console.log(gameId)
            break
          } else if (i === array.length - 1) {
            newNum = true
            break
          }
        }
        break
      }

      store.game_id = gameId
      const tables = {
        table: {
          cards: 'A123456789xjqkA123456789xjqkA123456789xjqkA123456789xjqk',
          total_bet: 0,
          owner_name: store.user.email,
          players: [store.user._id],
          game_id: gameId
        }
      }

      const hands = {
        hand: {
          cards: '123',
          current_bet: 0,
          owner_name: store.user.email
        }
      }
      // const currentUser = store.tableData.user1_id
      console.log(tables)
      // sending it data so it knows what table to update
      tableApi.createTable(tables)
        .then(handsApi.createHand(hands))
        .then(tableUi.onCreateTableSuccess)
        .catch(tableUi.onCreateTableFailure)
    })
    .catch(tableUi.checkHostIdFailure)
}

const joinTable = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const hands = {
    hand: {
      cards: '123',
      current_bet: 0,
      owner_name: store.user.email
    }
  }
  tableApi.joinTable(data)
    .then(handsApi.createHand(hands))
    .then(tableUi.onJoinTableSuccess)
    .catch(tableUi.onJoinTableFailure)
}

const leaveTableAsUser = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  console.log(data)
  tableApi.leaveTable(data)
    .then(tableUi.onLeaveTableSuccess)
    .catch(tableUi.onLeaveTableFailure)
}

const leaveTableAsOwner = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  console.log(data)
  tableApi.leaveTable(data)
    .then(tableApi.deleteTable)
    .then(tableUi.onLeaveTableSuccess)
    .catch(tableUi.onLeaveTableFailure)
}

const dealTable = function (event) {
  event.preventDefault()
  const data = {
    update: {
      data: '1'
    }
  }
  tableApi.dealTable(data)
    .then(tableUi.onDealTableSuccess)
    .catch(tableUi.onDealTableFailure)
}

module.exports = {
  dealTable,
  joinTable,
  leaveTableAsUser,
  leaveTableAsOwner,
  createTable
}
