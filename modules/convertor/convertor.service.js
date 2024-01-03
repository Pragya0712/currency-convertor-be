const interactions = require("../../interactions/coin_market.interactions");

exports.listAllCryptos = async () => {
	const response = await interactions.cryptoListing();
	// console.log(response);
	const cryptoList = response.data;
	return cryptoList;
};

exports.listAllCurrencies = async () => {
	const response = await interactions.currencyListing();
	const currencyList = response.data;
	return currencyList;
};

exports.convertor = async (obj) => {
	const { id, symbol, amount } = obj;
	const defaultAmount = 1;
	const response = await interactions.priceConversion(
		symbol,
		defaultAmount,
		id
	);
	const conversionData = response.data;
	const currency_symbol = conversionData.symbol;
	const price = conversionData?.quote[symbol]?.price;
	if (!price) {
		throw {
			data: `Invalid input values`,
			status: 400,
		};
	}

	const convertedPrice = amount / price;
	return {
		currency_id: id,
		currency_symbol,
		crypto_symbol: symbol,
		convertedPrice,
	};
};
