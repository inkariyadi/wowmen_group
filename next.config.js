/*eslint-env node*/
module.exports = {
  reactStrictMode: true,
	
  publicRuntimeConfig: {
    API_URL: 'http://localhost:1337',
    IMAGES_DOMAIN: 'localhost',
  },
	
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['localhost'],
    path: '/_next/image',
    loader: 'default',
  },
};
