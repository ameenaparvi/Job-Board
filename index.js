const app = require('./api/index.js');
const serverless = require('serverless-http');

const handler = serverless(app);

// Export formats supported by @vercel/node
module.exports = handler;
module.exports.default = handler;
