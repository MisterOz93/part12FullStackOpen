FROM node:16.13.0 AS build-stage
WORKDIR /usr/src/app
COPY . .
ENV REACT_APP_BACKEND_URL=http://localhost:3001
RUN npm ci --only=production
RUN npm run build