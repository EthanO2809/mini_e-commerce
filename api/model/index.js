const Users = require('./Users')
const Products = require('./Products')
const Orders = require('./Orders')

module.exports = {
    users: new Users(),
    Products: new Products(),
    orders: new Orders()
}