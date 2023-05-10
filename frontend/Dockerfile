# base image
FROM node:14-alpine

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package*.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "run", "dev"]
