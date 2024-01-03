const interactions = require("../../interactions/coin_market.interactions");

exports.listAllCryptos = async (req, res) => {
	const response = await interactions.cryptoListing();
	// console.log(response);
	const cryptoList = response.data;
	return cryptoList;
};

exports.listAllCurrencies = async (req, res) => {
	const response = await interactions.currencyListing();
	// console.log(response);
	const cryptoList = response.data;
	return cryptoList;
};
