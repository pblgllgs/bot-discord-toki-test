module.exports = {
  name: 'fan',
  description: 'Datos de Cuenta FAN',
  options: [],
  run: async (int) => {
    int.reply(`Datos de cuenta FAN...
    El límite de abonos de Cuenta FAN - $5.000.000
    Giros en Cajero Automático diarios - $ 200.000
    Compras diarias (nacionales e internacionales) - $ 500.000
    Transferencia a un nuevo destinatario - $ 350.000`);
  },
};
