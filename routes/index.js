const express = require('express');
const Order = require('../models/Order');
const router = express.Router();
const db = require('../config/db')
const Sequelize = require('sequelize');
const res = require('express/lib/response');
const Op = Sequelize.Op

router.get('/', (req, res) => res.render('index'));
router.get('/books', (req, res) => {res.render('books')})


router.get('/books/buy', (req, res) => {res.render('buy')})
router.post('/books/buy', (req, res) => {
    let { full_name, phone_number, state, city, delivery_address, book_title, copies } = req.body;

        Order.create({
            full_name, 
            phone_number, 
            state, 
            city, 
            delivery_address, 
            book_title, 
            copies
        })
        .then(order => res.redirect('/'))
        .catch(err => console.log(err));

});


router.get('/buy', (req, res) => res.render('buy'));

router.get('/author', (req, res) => res.render('author'));
router.get('/contact', (req, res) => res.render('contact'));
router.get('/admin', (req, res) => res.render('order'));
router.get('/order', (req, res) => {
    Order.findAll()
        .then(orders => {
            console.log(orders)
            res.render('order', {
                orders
            })
        })
        .catch(err => console.log(err))
})
router.get('/register', (req, res) => res.render('register'));


module.exports = router;