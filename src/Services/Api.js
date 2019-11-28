import axios from "axios";

export default class Api {
	constructor() {
		this.url = "http://localhost:3001";
	}

	registerCandidat(candidat) {
		// return axios.post(this.url + "/user/registerCandidat", candidat);
		return axios.post(this.url + "/candidat/registerCandidat", candidat);
	}
}
