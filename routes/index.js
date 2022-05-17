const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const res = require("express/lib/response");
const Op = Sequelize.Op;

const bcrypt = require('bcrypt')

const Order = require("../models/Order");
const User = require("../models/User");

router.get("/", (req, res) => res.render("index"));
router.get("/books", (req, res) => {
  res.render("books", {layout: 'pages'});
});

router.get("/books/buy", (req, res) => {
  res.render("buy", {layout: 'pages'});
});
router.post("/books/buy", (req, res) => {
  let {
    full_name,
    phone_number,
    state,
    city,
    delivery_address,
    book_title,
    copies,
  } = req.body;

  Order.create({
    full_name,
    phone_number,
    state,
    city,
    delivery_address,
    book_title,
    copies,
  })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
});

router.get("/buy", (req, res) => res.render("buy", {layout: 'pages'}));
router.get("/author", (req, res) => res.render("author", {layout: 'pages'}));
router.get("/contact", (req, res) => res.render("contact", {layout: 'pages'}));
router.get("/admin", (req, res) => res.render("order", {layout: 'pages'}));
router.get("/order", (req, res) => {
  Order.findAll()
    .then((orders) => {
      console.log(orders);
      res.render("order", {
        orders,
      });
    })
    .catch((err) => console.log(err));
});

router.get("/register", (req, res) => res.render('register', {layout: 'pages'}))
router.post("/register", (req, res) => {
  const { full_name, email, phone_number, password, state } = req.body;

  bcrypt.hash(password, 10).then((hash) => {
    User.create({
      full_name,
      email,
      phone_number,
      password : hash,
      state,
    })
      .then(() => res.redirect('/'))
      .catch((err) => {
        if (err) {
          res.status(400).json({error: err})
        }
      });
  })

  router.get("/login", (req, res) => res.render('login', {layout: 'pages'}))

  
});

module.exports = router;
