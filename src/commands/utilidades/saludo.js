module.exports = {
  name: 'saludo',
  description: 'Soy el mas rapido respondiendo',
  options: [
    {
      type: 6,
      name: 'usuario',
      description: 'El usuario que desea saludar',
      required: true,
    },
  ],
  run: async (client, int) => {
    if (int.isCommand() && int.commandName === 'saludo') {
      const usuario = int.options.getUser('usuario');
      int.reply(`Hola, Bienvenido al canal ${usuario.username}`);
    }
  },
};
