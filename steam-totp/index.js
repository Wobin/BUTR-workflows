var code = require('steam-totp').generateAuthCode(process.argv[0]);
console.log(`::add-mask::${code}`);
console.log(`::set-output name=totp::${code}`);
