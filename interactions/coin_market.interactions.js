const axios = require("axios");
const nconf = require("nconf");

const base_url = nconf.get("coin_market_base_url");
const API_KEY = nconf.get("coin_market_api_key");

exports.cryptoListing = async () => {
	try {
		const response = await axios.get(
			`${base_url}/v1/cryptocurrency/map?start=1&limit=100&sort=id`,
			{
				headers: {
					"X-CMC_PRO_API_KEY": `${API_KEY}`,
					Accept: "*/*",
				},
			}
		);
		const json = response.data;
		return json;
	} catch (err) {
		throw {
			data: err.response.data,
			status: err.response.status,
			statusText: err.response.statusText,
		};
	}
};

exports.currencyListing = async () => {
	try {
		const response = await axios.get(`${base_url}/v1/fiat/map`, {
			headers: {
				"X-CMC_PRO_API_KEY": `${API_KEY}`,
				Accept: "*/*",
			},
		});
		const json = response.data;
		return json;
	} catch (err) {
		throw {
			data: err.response.data,
			status: err.response.status,
			statusText: err.response.statusText,
		};
	}
};
