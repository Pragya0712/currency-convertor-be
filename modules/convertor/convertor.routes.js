const controller = require("./convertor.controllers");

module.exports = (app) => {
	let router = require("express").Router();

	router.get("/", controller.listAllCryptos);

	app.use("/api/v1/convertor", router);
};
