const users = require('./Users')
const Products = require('./Products')
const orders = require('./Orders')

module.exports = {
    users: new users(),
    Products: new Products(),
    orders: new orders()
}