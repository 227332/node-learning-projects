# syntax=docker/dockerfile:1

FROM node:14.16

# Create app directory and set it as working directory
WORKDIR /app

# Set node user as owner of the app directory and all its subdirectories
RUN chown -R node:node /app

# Copy env files
COPY package.json ./
COPY package-lock.json ./

# Set user to node user
USER node

# Install dependencies
RUN npm ci --only=production
# For dev:
# RUN npm install

# Copy source code
COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]