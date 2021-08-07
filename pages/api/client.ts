/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';


const PREFIX = 'http://localhost:1337';

/**
 * Get all list of merchandises 
 * @param {*} get
 */
export const getMerchandises = () => {
	return axios({
		url: `${PREFIX}/merchandises`,
		method: 'get',
	});
};

/**
 * Post order of merchandise
 * @param {*} post
 */
export const postMerchandiseOrder = (data: any) => {
	return axios({
		url: `${PREFIX}/merchandises`,
		method: 'post',
		data,
	});
};

/**
 * Get all list of members
 * @param {*} get
 */
export const getMembers = () => {
	return axios({
		url: `${PREFIX}/members`,
		method: 'get',
	});
};

/**
 * Get all list of articles
 * @param {*} get
 */
export const getArticles = () => {
	return axios({
		url: `${PREFIX}/articles`,
		method: 'get',
	});
};

/**
 * Get all list of articles
 * @param {*} get
 */
export const getTopArticles = (params: any) => {
	return axios({
		url: `${PREFIX}/articles`,
		method: 'get',
		params
	});
};
