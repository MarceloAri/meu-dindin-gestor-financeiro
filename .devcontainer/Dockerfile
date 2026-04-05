FROM node:24

# Criar diretório de trabalho
WORKDIR /app

# Instalar dependências globais se quiser
RUN npm install -g pnpm

# Copiar package.json primeiro (cache)
COPY package*.json ./

COPY . .

# Expor porta do Next
EXPOSE 3000