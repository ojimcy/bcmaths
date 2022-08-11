const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const Handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

// load config
dotenv.config({ path: "./config/config.env" });

//database
const connectDB = require("./config/db");

connectDB();

const app = express();

// handlebars helpers
const { formatDate} = require("./helpers/hbs");

//Handlebars
app.engine(
  ".hbs",
  engine({
    helpers: { formatDate},
    defaltLayout: "layout",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

app.use(bodyParser.urlencoded({ extended: false }));

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/index"));

app.use("/author", require("./routes/index"));
app.use("/contact", require("./routes/index"));

app.use("/books", require("./routes/index"));
app.use("/books/buy", require("./routes/index"));

app.use("/buy", require("./routes/index"));

app.use("/order/order", require("./routes/index"));

app.use("order/success", require("./routes/index"));
app.use("order/checkout/:id", require("./routes/index"));

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
