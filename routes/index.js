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
router.get('/author', (req, res) => res.render('author'));
router.get('/contact', (req, res) => res.render('contact'));
router.get('/admin', (req, res) => res.render('order'));


module.exports = router;