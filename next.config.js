/*eslint-env node*/
module.exports = {
  reactStrictMode: true,
	
  publicRuntimeConfig: {
    API_URL: 'https://wowmen-website.s3.ap-southeast-1.amazonaws.com',
    IMAGES_DOMAIN: 'wowmen-website.s3.ap-southeast-1.amazonaws.com',
  },
	
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['strapi-wowmen.herokuapp.com', 'wowmen-website.s3.ap-southeast-1.amazonaws.com'],
    path: '/_next/image',
    loader: 'default',
  },
};
