const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(
  session({
    secret: "apple",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());
// Routes
const indexRouter = require("./routes/index");
const aboutRoute = require("./routes/about");
const classesRoute = require("./routes/classes");
const contactRoute = require("./routes/contactus");

// Body parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "views"); // Specify the views directory

app.use("/", indexRouter);
app.use("/about", aboutRoute);
app.use("/classes", classesRoute);
app.use("/contact", contactRoute);
// Add more route middleware as needed...

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
