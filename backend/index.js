const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.nextTick.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server listeing on ${PORT}`);
});
