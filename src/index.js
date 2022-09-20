const Discord = require('discord.js');
require('dotenv').config();

require('http')
  .createServer((req, res) => res.end('hola'))
  .listen(process.env.PORT);

const client = new Discord.Client({
  intents: 32767,
});
const path = require('path');
const fs = require('fs');

const dirEvents = fs.readdirSync(path.join(__dirname, 'events'));
const dirCommands = fs.readdirSync(path.join(__dirname, 'commands'));

for (const fileEvent of dirEvents) {
  const event = require(path.join(__dirname, 'events', fileEvent));
  client.on(event.name, (...args) => event.run(client, ...args));
}

client.commands = new Discord.Collection();
for (const subFolder of dirCommands) {
  const filesCommands = fs.readdirSync(
    path.join(__dirname, 'commands', subFolder)
  );

  for (const fileCommand of filesCommands) {
    const command = require(path.join(
      __dirname,
      'commands',
      subFolder,
      fileCommand
    ));
    console.log(`${command.name} ok`);
    client.commands.set(command.name, command);
  }
}

client.login(process.env.DISCORD_TOKEN);
