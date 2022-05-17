const Sequelize = require('sequelize');
const db =  require('../config/db');

const User = db.define('user', {
    full_name: {
        type: Sequelize.STRING
    },
    email : {
        type: Sequelize.STRING
    },
    password : {
        type: Sequelize.TEXT
    },
    phone_number: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
})

module.exports = User;