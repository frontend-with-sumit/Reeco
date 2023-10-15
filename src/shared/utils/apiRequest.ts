import axios, { AxiosResponse } from "axios";

const baseURL = "http://localhost:3000";

interface ParamsType {
	url: string;
	method?: string;
	data?: object;
}
const makeApiRequest = async ({ url, method, data }: ParamsType) => {
	try {
		const response: AxiosResponse = await axios({
			url: `${baseURL}${url}`,
			method,
			data,
		});

		return response;
	} catch (err) {
		if (axios.isAxiosError(err)) throw new Error(err?.message);
		else throw new Error("Something went wrong");
	}
};

export { makeApiRequest };
