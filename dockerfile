# Use an official Node.js runtime as the base image
FROM node:18.16

# Install Xvfb for cypress headless environment
RUN apt-get update && apt-get install -y xvfb

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app files to the container
COPY . .

# Expose the port that your app listens on (if applicable)
EXPOSE 3000

# Define the command to start your app
CMD ["npm", "start"]
