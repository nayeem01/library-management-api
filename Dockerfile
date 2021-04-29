FROM node:15
WORKDIR /server
COPY package.json .
RUN npm i
COPY . ./
EXPOSE 5000
CMD ["npm", "run", "dev"]
