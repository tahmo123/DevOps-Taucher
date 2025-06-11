# Verwende offizielles Node-Image
FROM node:18

# Arbeitsverzeichnis im Container
WORKDIR /app

# Paketdefinitionen kopieren & Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# Restliche Dateien ins Image kopieren
COPY . .

# App exposed Port (optional, z. B. 3000)
EXPOSE 3000

# Startbefehl
CMD ["npm", "start"]
