# Use the official slim Node.js image with version 22 as a base image
FROM node:23-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if it exists) into the container
COPY package*.json ./

# Install the app dependencies inside the container
RUN npm install --production 

# Copy the rest of the application code into the container
COPY . .

# Expose the port the app will run on (default: 5000)
EXPOSE 5000

# Set environment variables (you can also set this later with -e option while running the container)
ENV NODE_ENV=production

# Run the app
CMD ["node", "index.js"]
