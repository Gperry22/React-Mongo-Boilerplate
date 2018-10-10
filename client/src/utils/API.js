import axios from 'axios';

export default {
	getFruit: () => {
		return axios.get('/api/fruit');
	},
	getSweets: () => {
		return axios.get('/api/sweets');
	}
};
