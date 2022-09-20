module.exports = {
  name: 'ready',
  run: (client) => {
    console.log('Bot Despierto!');
    client.application.commands.set(client.commands.map((x) => x));
  },
};
