import { SyntheticEvent } from 'react';

export const validEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const handleBrokenImg = (e: any, url = '/images/articles/article-default.png') => {
  console.log(e.target);
  e.target.onerror = null;
  e.target.src = url;
};
