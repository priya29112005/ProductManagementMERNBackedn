# Product Management API

This is a backend-only Product Management API for a sports shop, built using Node.js, Express, and MongoDB. It provides CRUD functionality for managing products and players. The API is designed to be tested using Postman.

## Features

- CRUD operations for products and users (players).
- MongoDB as the database, managed with Mongoose.
- Express for routing and middleware.
- Morgan for request logging.
- dotenv for environment variable management.
- Debug module for improved logging during development.

## Installation

1. Clone the repository:
   git clone <repository-url>
   cd <repository-directory>

2. Install dependencies:
   npm install

3. Create a `.env` file in the root directory with the following variables:
   MONGO_URI=<Your MongoDB connection string>
   PORT=<Your desired port number>

4. Start the server:
   npm start

## API Endpoints

The API is mounted under two primary routes:

1. `/sportshop` - For product management.
2. `/players` - For user management.

### Product Routes (`/sportshop`)

- `GET /` - Get all products.
- `GET /:id` - Get product by ID.
- `POST /` - Add a
