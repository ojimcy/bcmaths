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
  let {
    _id,
    full_name,
    phone_number,
    state,
    delivery_address,
    copies,
    bcm_jss,
    bcm_jss1,
    bcm_jss2,
    bcm_jss3,
    bcm_jss_copies,
    bcm_jss1_copies,
    bcm_jss2_copies,
    bcm_jss3_copies,
  } = req.body;
  try {
    await Order.create({
      _id,
      full_name,
      phone_number,
      state,
      delivery_address,
      copies,
      bcm_jss,
      bcm_jss1,
      bcm_jss2,
      bcm_jss3,
      bcm_jss_copies,
      bcm_jss1_copies,
      bcm_jss2_copies,
      bcm_jss3_copies,
    });
    res.redirect("order/success");
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

router.get("/buy", (req, res) => res.render("buy", { layout: "pages" }));
router.get("/author", (req, res) => res.render("author", { layout: "pages" }));
router.get("/contact", (req, res) =>
  res.render("contact", { layout: "pages" })
);


router.get("/order", (req, res) => {
  Order.findAll()
    .then((orders) => {
      res.render("order", {
        orders,
        layout: "admin"
      });
    })
    .catch((err) => console.log(err));
});

router.get("/order/success", (req, res) => {
  res.render("order/success", { layout: "pages" });
});

router.get("/order/success/preview/:id", async (req, res) => {
  try {
    const preview = await Order.findOne({ _id: req.params.id }).lean();
    if (!preview) {
      res.render("error/404");
    }
    res.render("order/preview", { preview, layout: "pages" });
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

router.get("/order/summary/:id", async (req, res) => {
  try {
    const summary = await Order.findOne({ _id: req.params.id }).lean();
    if (!summary) {
      res.render("error/404");
    }
    res.render("order/summary", { summary, layout: "pages" });
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

router.get("/order/edit/:id", async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id }).lean();

  if (!order) {
    return res.render("error/404");
  } else {
    res.render("order/checkout", { order, layout: "pages" });
  }
});

// process order
router.put("/books/buy", async (req, res) => {
  let order = await Order.findById(req.params.id).lean();

  if (!order) {
    res.render("error/404");
  } else {
    order = await Order.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });

    res.redirect("/order");
  }
});

module.exports = router;
