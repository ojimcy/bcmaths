const express = require('express');
const Order = require('../models/order');
const router = express.Router();
const db = require('../config/db')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

router.get('/', (req, res) => res.render('index'));

router.get('/books/buy', (req, res) => res.render('buy'))

router.post('/books/buy', (req, res) => {
    let { full_name, phone_number, state, city, delivery_address, book_title, numbers_of_copies } = res.body;

    
        Order.create({
            full_name, 
            phone_number, 
            state, city, 
            delivery_address, 
            book_title, 
            numbers_of_copies
        })
        .then(order => res.redirect('/books'))
        .catch(err => console.log(err));

});

router.get('/books', (req, res) => res.render('books'));
router.get('/author', (req, res) => res.render('author'));
router.get('/contact', (req, res) => res.render('contact'));

module.exports = router;