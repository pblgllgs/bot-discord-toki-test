const Discord = require('discord.js');

const client = new Discord.Client({
  intents: 32767,
});

client.on('ready', () => {
  console.log('Estoy listo');
  client.application.commands.set([
    {
      name: 'ping',
      description: 'Pong',
      options: [],
    },
  ]);
});

client.on('interactionCreate', (int) => {
  if (int.isCommand() && int.commandName === 'ping') {
    int.reply('Pong!');
  }
});

client.login(process.env.DISCORD_TOKEN);
