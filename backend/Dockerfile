# Set the base image to Node.js
FROM node:14.17.0-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install 
#--production

# Install PostgreSQL client library
RUN apk add --no-cache postgresql-client

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3001

RUN npx prisma generate

RUN npx prisma migrate dev


# Start the application
CMD [ "npm", "run", "dev" ]
