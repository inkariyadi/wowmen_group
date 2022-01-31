/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import axios from 'axios';


export const API_URL = 'https://strapi-wowmen.herokuapp.com';

/**
 * Get all list of merchandises 
 * @param {*} get
 */
export const getMerchandises = () => {
  return axios({
    url: `${API_URL}/merchandises`,
    method: 'get',
  });
};

/**
 * Post order of merchandise
 * @param {*} post
 */
export const postMerchandiseOrder = (data: any) => {
  return axios({
    url: `${API_URL}/orders`,
    method: 'post',
    data: data,
  });
};

/**
 * Get all list of members
 * @param {*} get
 */
export const getMembers = () => {
  return axios({
    url: `${API_URL}/members`,
    method: 'get',
  });
};

/**
 * Get all list of members
 * @param {*} get
 */
export const getMemberById = (id: number) => {
  return axios({
    url: `${API_URL}/members/${id}`,
    method: 'get',
  });
};

/**
 * Get all list of articles
 * @param {*} get
 */
export const getArticles = () => {
  return axios({
    url: `${API_URL}/articles`,
    method: 'get',
  });
};

/**
 * Get Top Article
 * @param {*} get
 */
export const getTopArticle = () => {
  return axios({
    url: `${API_URL}/top-article`,
    method: 'get',
  });
};

/**
 * Get Top Article below lifestyle article
 * @param {*} get
 */
export const getTopArticle2= () => {
  return axios({
    url: `${API_URL}/top-article-2`,
    method: 'get',
  });
};

/**
 * Get Top Article below lifestyle article
 * @param {*} get
 */
export const getLifestyleArticles= () => {
  return axios({
    url: `${API_URL}/lifestyle-article`,
    method: 'get',
  });
};

/**
 * Get link in programs
 * @param {*} get
 */
export const getFormLink = () => {
  return axios({
    url: `${API_URL}/form-link`,
    method: 'get',
  });
};

/**
 * Get Top Article below lifestyle article
 * @param {*} get
 */
 export const getPartners= () => {
  return axios({
    url: `${API_URL}/partners`,
    method: 'get',
  });
};