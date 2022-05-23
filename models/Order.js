const Sequelize = require('sequelize');
const db =  require('../config/db');

const Order = db.define('order', {
    full_name: {
        type: Sequelize.STRING
    },
    phone_number: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    delivery_address: {
        type: Sequelize.STRING
    },
    book_title: {
        type: Sequelize.STRING
    },
    copies: {
        type: Sequelize.INTEGER
    },
})

module.exports = Order;