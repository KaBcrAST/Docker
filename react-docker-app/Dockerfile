FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on (Vite uses 5173 by default)
EXPOSE 5173

# Command to run the application
CMD ["npm", "start"]