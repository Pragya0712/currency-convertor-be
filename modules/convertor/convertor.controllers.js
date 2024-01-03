const service = require("./convertor.service");

exports.listAllCryptos = async (req, res) => {
	try {
		const response = await service.listAllCryptos();
		res
			.status(200)
			.json({ msg: "List of all crypto currencies", data: response });
	} catch (err) {
		res.status(err.status).send(err.data);
	}
};
