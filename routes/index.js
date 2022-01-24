const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/buy', (req, res) => res.render('buy'));
router.get('/books', (req, res) => res.render('books'));
router.get('/author', (req, res) => res.render('author'));
router.get('/contact', (req, res) => res.render('contact'));

module.exports = router;