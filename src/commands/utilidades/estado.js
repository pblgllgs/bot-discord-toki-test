module.exports = {
  name: 'estado',
  description: 'Datos de Banco Estado',
  options: [],
  run: async (client, int) => {
    int.reply(`Datos de Banco Estado...
    Límite de saldo en la cuenta - $5.000.000
    Límite mensual de abonos en la CuentaRUT - $4.000.000 al mes
    Monto máximo para retirar desde cajeros automáticos y CajaVecina - $200.000 diarios (combinado)`);
  },
};
