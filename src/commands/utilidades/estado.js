module.exports = {
  name: 'estado',
  description: 'Datos de Banco Estado',
  options: [],
  run: async (client, int) => {
    int.reply(`Datos de Banco Estado...
Costos Generales	Cuenta Rut Visa (vista)
Apertura	$0
Mantencion	$0
Giro Cajeros del Mismo Banco	$200
Giro Cajero Otro Banco	$300
Giro Cajero Extranjero 1,9% (US$0,5 como minimo)
Giro en Caja (Banco)	$200
Caja Chile/Caja Vecina	$200
Transferencia Mismo Banco	$0
Transferencia Otro Banco	$300
Compra Internacional	1,9% (US$0,5 como minimo)
Compra Nacional	$0
Reposicion Tarjeta	$1.000
Tipo de Tarjeta	Fisica/Digital
Limites En Compras, Abonos, Giro	
Compra Fisica	$400.000
Compra Online	$400.000
Compra/Dia	$400.000
Giro Max Cajero	$200.000

Abono $4.000.000
Transferencia Nuevo Contacto	$100.000 (24hrs)
Transferencia Max	$1.000.000
Saldo En Cuenta	$5.000.000
Beneficios y APP	
Descuentos	
CashBack (Devoluciones)	
Evaluacion APP Play Store	3,9`);
  },
};
