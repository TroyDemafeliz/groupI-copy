# Build stage using Node.js
FROM node:lts-alpine as build

# Set working directory
WORKDIR /app

# Correctly setting the PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies
COPY package.json ./
RUN npm install --silent

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Production stage using Nginx
FROM nginx:1.21

# Update and install wget, clean up to keep the image clean
RUN apt-get update && \
    apt-get install -y wget && \
    rm -rf /var/lib/apt/lists/*

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy nginx configuration
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf:ro

# Copy static assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html
