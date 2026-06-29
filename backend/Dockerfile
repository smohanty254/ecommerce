FROM node:20-alpine as deps
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
FROM deps AS build
COPY . .
RUN npm run build
FROM node:20-alpine as runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm install --omit=dev --legacy-peer-deps
COPY --from=build /app/dist ./dist
EXPOSE 4000
CMD ["node", "dist/main.js"]