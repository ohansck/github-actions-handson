# Book Management API with NestJS

[![Build Status](https://github.com/ohansck/beertech-lib/actions/workflows/dev-build.yml/badge.svg)](https://github.com/ohansck/beertech-lib/actions/workflows/dev-build.yml/badge.svg)
[![Documentation](https://img.shields.io/badge/API%20Documentation-Swagger-brightgreen)](http://ec2-54-242-248-76.compute-1.amazonaws.com/api)

A simple RESTful API built with NestJS to manage a collection of books. This project includes functionalities to retrieve all books, retrieve a specific book, add a new book, update an existing book, and delete a book.

You can use the [live deployment here](http://ec2-54-242-248-76.compute-1.amazonaws.com/books)

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Run Locally](#run-locally)
  - [Testing](#testing)
- [API Documentation](#api-documentation)
- [Database Configuration](#database-configuration)
- [Docker Deployment](#docker-deployment)
- [GitHub Actions CI](#github-actions-ci)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm
- NestJS CLI
- Your choice of SQL database (e.g., MSSQL)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ohansck/beertech-lib.git
   ```

2. Install dependencies:

   ```bash
   cd your-repo-name
   npm install
   ```

## Usage

### Run Locally

1. Set up your database configuration by providing environment variables in the `.env` file:

   ```env
   DB_HOST=your_database_host
   DB_USERNAME=your_database_username
   DB_PASSWORD=your_database_password
   DB_DATABASE=your_database_name
   DB_PORT=your_database_port
   ```

2. Start the application:

   ```bash
   npm run start:dev
   ```

3. Access the API at `http://localhost:3000/books`.

### Testing

Run unit tests:

```bash
npm run test
```

## API Documentation

Explore the API using Swagger documentation:

- [Swagger Documentation](http://ec2-54-242-248-76.compute-1.amazonaws.com/api)

## Database Configuration

This project uses a SQL database to store book information. Ensure that you configure the database by providing the required environment variables in the `.env` file.

## Docker Deployment

Easily deploy the application using Docker and Docker Compose:

```bash
docker-compose up -d
```

Access the API at `http://localhost:3000/books`.

## GitHub Actions CI

The project includes a GitHub Actions workflow on the `dev` and `main` branch, automatically building and running tests on each code submission.

## Contributing

Feel free to open issues, submit pull requests, or provide feedback.

---