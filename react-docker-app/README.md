# React Docker App

This project is a simple React application that is containerized using Docker. It demonstrates how to set up a React app with Docker and Docker Compose.

## Project Structure

```
react-docker-app
├── src
│   ├── App.js
│   ├── index.js
│   ├── components
│   │   └── index.js
│   └── styles
│       └── index.css
├── public
│   └── index.html
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── package.json
├── README.md
└── .gitignore
```

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd react-docker-app
   ```

2. Build the Docker image:

   ```
   docker-compose build
   ```

### Running the Application

To run the application, use the following command:

```
docker-compose up
```

This will start the React application in a Docker container. You can access it at `http://localhost:3000`.

### Development

For development, you can modify the source files in the `src` directory. The application will automatically reload when changes are detected.

### Stopping the Application

To stop the application, press `CTRL+C` in the terminal where the Docker container is running. You can also run:

```
docker-compose down
```

### License

This project is licensed under the MIT License. See the LICENSE file for more details.