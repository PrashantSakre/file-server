import axios from "./base";

const token = async () => {
	return `Bearer ${window.localStorage.getItem("token")}`;
};

export async function SignUp(data) {
	return axios.request({
		url: "/signup",
		method: "POST",
		data,
		headers: {
			Authorization: await token(),
		},
	});
}

export async function SignIn(data) {
	return axios.request({
		url: "/sign",
		method: "POST",
		data,
		headers: {
			Authorization: await token(),
		},
	});
}
