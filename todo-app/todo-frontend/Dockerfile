FROM node:16.13.0 
WORKDIR /usr/src/app
COPY . .
ENV REACT_APP_BACKEND_URL=http://localhost:3001
RUN npm ci 
RUN CI=true npm test
RUN npm run build
CMD [ "npm", "start" ]
