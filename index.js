const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateRandomPassword(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
  const randomBytes = crypto.randomBytes(length);
  let password = '';

  for (let i = 0; i < randomBytes.length; i++) {
    const randomIndex = randomBytes[i] % charset.length;
    password += charset[randomIndex];
  }

  return password;
}

rl.question('Digite o comprimento da senha desejada: ', (length) => {
  const password = generateRandomPassword(Number(length));
  console.log('Senha gerada:', password);
  rl.close();
});
