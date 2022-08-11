const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

router.get("/", (req, res) => res.render("index"));
router.get("/books", (req, res) => {
  res.render("books", { layout: "pages" });
});

router.get("/books/buy", (req, res) => {
  res.render("buy", { layout: "pages" });
});

router.post("/books/buy", async (req, res) => {
  try {
    await Order.create(req.body);

    const summary = await Order.findOne({ _id: req.params.id })
      .lean();
    res.render("order/summary", { summary });
  } catch (err) {
    console.error(err);
    render("error/500");
  }
});

router.get("/buy", (req, res) => res.render("buy", { layout: "pages" }));
router.get("/author", (req, res) => res.render("author", { layout: "pages" }));
router.get("/contact", (req, res) =>
  res.render("contact", { layout: "pages" })
);

router.get("/order", async (req, res) => {
  try {
    const orders = await Order.find({ status: "processing" })
      .sort({ createdAt: "desc" })
      .lean();
    res.render("order/order", { orders });
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

router.get("/order/success", (req, res) => {
  res.render("order/success", { layout: "pages" });
});

router.get("/order/summary/:id", async (req, res) => {
  try {
    const summary = await Order.findOne({ _id: req.params.id })
      .lean();
    if(!summary) {
      res.render('error/404')
    }
    res.render("order/summary", { summary });
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

module.exports = router;
