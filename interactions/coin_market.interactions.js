const axios = require("axios");
const nconf = require("nconf");

const base_url = nconf.get("coin_market_base_url");
const API_KEY = nconf.get("coin_market_api_key");

const cryptoListing = async () => {
	try {
		const response = await axios.get(
			`${base_url}/v1/cryptocurrency/map?start=1&limit=100&sort=id`,
			{
				headers: {
					"X-CMC_PRO_API_KEY": "1af8c0ca-5a60-4ec6-8f68-8c36091321f1",
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

module.exports = {
	cryptoListing,
};
