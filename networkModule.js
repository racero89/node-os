const os = require("os");

const networkInterfaces = os.networkInterfaces();

for (const [interfaz, detalles] of Object.entries(networkInterfaces)) {
  console.log(`Interfaz: ${interfaz}`);
  detalles.forEach((detalle) => {
    console.log(`  Familia: ${detalle.family}`);
    console.log(`  Dirección: ${detalle.address}`);
    console.log(`  Interno: ${detalle.internal}`);
    console.log("---");
  });
}
