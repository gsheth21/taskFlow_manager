# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install PM2 globally
RUN npm install -g pm2

# Copy TypeScript and NestJS config files
COPY tsconfig*.json ./
COPY nest-cli.json ./

# Copy the rest of the application code (including src/)
COPY src/ ./src/

# Copy the start.sh script
COPY start.sh ./

# Make the script executable
RUN chmod +x ./start.sh

# Build the NestJS application (if needed)
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Start the application using the start.sh script
CMD ["./start.sh"]