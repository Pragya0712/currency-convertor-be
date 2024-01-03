const service = require("./convertor.service");
const { validationResult } = require("express-validator");

exports.listAllCryptos = async (req, res) => {
	try {
		const response = await service.listAllCryptos();
		res
			.status(200)
			.json({ msg: "List of all crypto currencies", data: response });
	} catch (err) {
		res.status(err.status).send({ errors: err.data });
	}
};
exports.listAllCurrencies = async (req, res) => {
	try {
		const response = await service.listAllCurrencies();
		res.status(200).json({ msg: "List of all currencies", data: response });
	} catch (err) {
		res.status(err.status).send({ errors: err.data });
	}
};

exports.convertor = async (req, res) => {
	try {
		const obj = {
			id: req.query.currency_id,
			amount: req.query.amount,
			symbol: req.query.crypto_symbol,
		};

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const response = await service.convertor(obj);
		res.status(200).json({ msg: "List of all currencies", data: response });
	} catch (err) {
		res.status(err.status).json({ errors: err.data });
	}
};
