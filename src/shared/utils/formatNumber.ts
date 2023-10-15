const formatNumber = (num: number | string, format: string = "usd") => {
	num = typeof num === "string" ? num : num.toString();

	const options: Intl.NumberFormatOptions = {
		currency: format,
	};

	const formattedNumber = new Intl.NumberFormat(undefined, options).format(
		parseFloat(num.replace(/[^0-9.-]+/g, ""))
	);

	return formattedNumber;
};

export default formatNumber;
