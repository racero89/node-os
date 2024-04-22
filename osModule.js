
const os= require("node:os");
const systemInfo = {
    Nombre: os.hostname(),
    Tipo: os.type(),
    Versión: os.release(),
    Arquitectura: os.arch(),
    CPUs: os.cpus().length,
    'Memoria Total (MB)': (os.totalmem() / (1024 * 1024)).toFixed(2),
    'Memoria Libre (MB)': (os.freemem() / (1024 * 1024)).toFixed(2)
  };
  
  console.log("informacion del sistema");
  Object.entries(systemInfo).forEach(([key,value])=>{
    console.log("${key}:${value}");
  });