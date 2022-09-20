module.exports = {
  name: 'ping',
  description: 'Soy el mas rapido respondiendo',
  options: [],
  run: async (client, int) => {
    int
      .reply({
        content: 'Analizando',
        fetchReply: true,
      })
      .then((m) => {
        m.edit(`Ping: \`${Date.now() - m.createdTimestamp}ms\``);
      });
  },
};
