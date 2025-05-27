// Importamos el módulo mongoose para conectarnos a MongoDB
const mongoose = require('mongoose');

// Definimos una función asíncrona para conectar a la base de datos
const connectDB = async () => {
  try {
    // Se intenta conectar a MongoDB utilizando la URI y algunas opciones de configuración
    await mongoose.connect('mongodb://localhost:27017/festivos', {
      // La opción useNewUrlParser indica usar el nuevo analizador de URLs
      useNewUrlParser: true,
      // useUnifiedTopology activa el nuevo motor de monitoreo de servidores
      useUnifiedTopology: true,
    });
    // Si la conexión es exitosa, se imprime en consola
    console.log('MongoDB conectado');
  } catch (error) {
    // En caso de error, se muestra el error en consola y se termina el proceso con código 1
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
};

// Se exporta la función connectDB para poder utilizarla en otros archivos
module.exports = connectDB;
