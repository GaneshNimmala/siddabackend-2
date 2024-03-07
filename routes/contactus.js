const express = require("express");
const path = require("path");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
  res.render("contact", { messages: req.flash("success") });
});

// Handle form submissions
router.post("/", async (req, res) => {
  const { name, email, number, classes, message } = req.body;

  // Create a transporter using your email credentials
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gopigokari30@gmail.com",
      pass: process.env.PASS_KEY,
    },
  });
  // Set up email data
  const mailOptions = {
    from: "gopigokari30@gmail.com", // Replace with your email
    to: "gopigokari30@gmail.com", // Destination email
    subject: "New Contact us Form Submission",

    html: `<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Information</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
      }
      img {
        display: block;
        margin: 0 auto;
        border-radius: 50%;
      }
      p {
        margin: 10px 0;
      }
      strong {
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p>Hi Gopi,</p>
      <p>You have received a new contact form submission from a user. Here are the details:</p>
      <p><strong>Name:</Strong>${name}</p>
      <p><strong>Mobile Number:</Strong>${number}</p>
      <p><strong>Email:</Strong>${email}</p>
      <p><strong>Service Interested:</Strong>${classes}</p>
      <p><strong>Message:</Strong></p>
      <p>${message}</p>
      
     
      <p>Best regards,
      </p>
     
    </div>
  </body>
  </html>`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    req.flash("success", "Thank you for contacting us! ");
    // Redirect to the appropriate page based on the source

    res.redirect("/contact");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error submitting the form. Please try again later.");
  }
});
module.exports = router;
