const express = require("express");
const cors = require("cors");
const app = express();
const nconf = require("nconf");
const setEnvironment = require("./env");
setEnvironment();

app.use(express.json({ extended: false }));
app.use(cors());

require("./modules/convertor/convertor.routes")(app);

app.listen(process.env.PORT || nconf.get("port"), () => {
	console.log(
		`Server is up and running on port ${process.env.PORT || nconf.get("port")}`
	);
});
