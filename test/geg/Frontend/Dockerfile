# Build stage using Node.js
FROM node:lts-alpine as build

# Set working directory
WORKDIR /app

# Correctly setting the PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies
COPY package*.json ./
RUN npm install --silent

# Copy the rest of the application
COPY . .

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "start:dev", "--" ,"--host"]