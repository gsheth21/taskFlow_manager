# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install PM2 globally
RUN npm install -g pm2

# Copy the rest of the source code
COPY . .

# Copy the start.sh script
COPY start.sh ./

# Make the script executable
RUN chmod +x ./start.sh

# Expose port 4200 (default for Angular dev server)
EXPOSE 4200

# Start the application using the start.sh script
CMD ["./start.sh"]