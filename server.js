const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
const users = require("./routes/api/users");

const app = express();
// Bodyparser middleware
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);
app.use(bodyParser.json());
// send to build
app.use(express.static(path.join(__dirname, "build")));
// DB Config
const db = require("./config/keys").connectionString;

app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
// Connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log("MongoDB successfully connected"))
	.catch((err) => console.log(err));

const port = process.env.PORT || 3000; // Heroku will need the PORT environment variable

app.listen(port, () => console.log(`App is live on port ${port}!`));