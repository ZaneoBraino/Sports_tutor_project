const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
const users = require("./routes/api/users");
const coaches = require("./routes/api/coaches");

const app = express();
// Bodyparser middleware
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);
app.use(bodyParser.json());
// send to build
app.use(express.static(path.join(__dirname, "frontend/build")));
// DB Config
const db = require("./config/keys").connectionString;

app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/coaches", coaches);

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

// Connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log("MongoDB successfully connected"))
	.catch((err) => console.log(err));

const port = process.env.PORT || 3001; // Heroku will need the PORT environment variable

app.listen(port, () => console.log(`App is live on port ${port}!`));
