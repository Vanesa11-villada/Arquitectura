# Usa una imagen oficial de Node.js como base
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de dependencias primero para aprovechar el cache de Docker
COPY package*.json ./

#Aviso de checkpoint
RUN curl -I https://registry.npmjs.org || echo "Conectividad fallida, pero continuamos..."

# Instala las dependencias del proyecto
RUN npm install --no-optional --loglevel=warn

# Copia el resto del proyecto al contenedor
COPY . .

# Expone el puerto que usa la app (3000 por defecto)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
