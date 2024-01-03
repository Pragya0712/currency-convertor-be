module.exports = (app) => {
	let router = require("express").Router();
	const controller = require("./convertor.controllers");

	router.get("/", controller.listAllCurrencies);
	router.get("/crypto", controller.listAllCryptos);

	app.use("/api/v1/currencies", router);
};
