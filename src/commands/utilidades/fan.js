module.exports = {
  name: 'fan',
  description: 'Datos de Cuenta FAN',
  options: [],
  run: async (client,int) => {
    int.reply(`Datos de cuenta FAN...
Costos Generales	Cuenta Fan (vista)
Apertura	$0
Mantencion	$0
Giro Cajeros del Mismo Banco	$203 (UF 0,006)*
Giro Cajero Otro Banco	$577 (UF 0,017)*
Giro Cajero Extranjero $2,5 USD
Giro en Caja (Banco)	$1.221(UF0,036)*
Caja Chile/Caja Vecina	$203 (UF 0,006)*
Transferencia Mismo Banco	$0
Transferencia Otro Banco	$0
Compra Internacional	US$0,5
Compra Nacional	$0
Reposicion Tarjeta	$1.434 (UF0,5)
Tipo de Tarjeta	Fisica/Digital
Limites En Compras, Abonos, Giro	
Compra Fisica	$500.000
Compra Online	$500.000
Compra/Dia	$500.000
Giro Max Cajero	$200.000
Abono $5.000.000
Transferencia Nuevo Contacto	-
Transferencia Max	-
Saldo En Cuenta	Sin Limite
Beneficios y APP	
Descuentos	
CashBack (Devoluciones)	
Evaluacion APP Play Store	2.9`);
  },
};
