const uso = 'dev';
require('dotenv').config();

const state = () => {
  if (uso === 'pro') {
    return process.env.DISCORD_TOKEN;
  }
  return process.env.DISCORD_TOKEN_DEV;
};

module.exports = {
  state,
};
