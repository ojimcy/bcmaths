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
    res.redirect("order/success");
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

module.exports = router;
