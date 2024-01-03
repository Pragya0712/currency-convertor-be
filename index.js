const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

app.listen(4000, () => {
	console.log("Listening on port 4000...");
});