const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'secret-key');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

console.log(`hex:${hmac.digest('hex')}`);
console.log(`base64:${hmac.digest('base64')}`);