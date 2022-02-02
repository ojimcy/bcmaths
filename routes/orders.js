const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Order = require('../models/Order')

// Get book list
router.get('/', (req, res) => 
Order.findAll()
    .then(orders => {
        res.render('order', {
            orders
        })
    })
    .catch(err => console.log(err)) 
    );


// Add an order
router.post('/books/buy', (req, res) => {
    let { full_name, phone_number, state, city, delivery_address, book_title, copies } = req.body;

    let errors = []

    if (errors > 0) {
        res.render('buy', {
            errors,
            full_name, 
            phone_number, 
            state, 
            city, 
            delivery_address, 
            book_title, 
            copies
        })
    } else {
        
        // Insert to table
        Order.create({
            full_name,
            phone_number,
            state,
            city, 
            delivery_address, 
            book_title,
            copies
        })
            .then(order => res.redirect('/books'))
            .catch(err => console.log(err))
    }
})


module.exports = router