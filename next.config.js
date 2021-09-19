/*eslint-env node*/
module.exports = {
  reactStrictMode: true,
	
  publicRuntimeConfig: {
    API_URL: 'https://strapi-wowmen.herokuapp.com',
    IMAGES_DOMAIN: 'strapi-wowmen.herokuapp.com',
  },
	
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['strapi-wowmen.herokuapp.com'],
    path: '/_next/image',
    loader: 'default',
  },
};
