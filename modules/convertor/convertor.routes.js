module.exports = (app) => {
	let router = require("express").Router();
	const controller = require("./convertor.controllers");
	const { query } = require("express-validator");

	router.get("/", controller.listAllCurrencies);
	router.get("/crypto", controller.listAllCryptos);
	router.post(
		"/crypto",
		[
			query("currency_id", "currency_id is missing").notEmpty(),
			query("amount", "amount is missing").notEmpty(),
			query("crypto_symbol", "crypto_symbol is missing").notEmpty(),
		],
		controller.convertor
	);

	app.use("/api/v1/currencies", router);
};
