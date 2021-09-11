/* eslint-disable comma-dangle */
/* eslint-disable quotes */
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
    url: `${PREFIX}/orders`,
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
    params,
  });
};

/**
 * Get link in programs
 * @param {*} get
 */
export const getFormLink = () => {
  return axios({
    url: `${PREFIX}/form-link`,
    method: 'get',
  });
};
