const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash)
//     })
// });

let hashedPassword = '$2a$10$5cnXmANuWzy7iEBfJECbzOzOLAH502750/Pn9Cn6WhohMsV2h6YNe';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res)
});