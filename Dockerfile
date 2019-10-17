FROM node:10

WORKDIR usr/src/app

COPY package*.json ./
RUN npm install

# Copy local angular/nest code to the container
COPY . .

RUN npm run build:ssr

CMD ["npm", "run", "serve:ssr"]