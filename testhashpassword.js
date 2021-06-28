
const bcrypt = require('bcryptjs');
const password = 'password1'



let hashedPassword = async () => {
  console.log(await bcrypt.hash(password, 10));
}

console.log(hashedPassword());