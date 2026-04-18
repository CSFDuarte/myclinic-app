FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build \
 && cp -r .next/static .next/standalone/.next/static \
 && cp -r public .next/standalone/public
ENV NODE_ENV=production
EXPOSE 3000
CMD ["sh", "-c", "node .next/standalone/server.js"]
