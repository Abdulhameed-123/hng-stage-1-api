
---

# ExpressJS Project -  Stage One Task Backend HNG

[![StartEase](https://img.shields.io/badge/Generated%20by-StartEase-blue)](https://github.com/JC-Coder/startease)

## Overview

This project is a basic web server that exposes an API endpoint for the Stage One Task of the Backend Track. It provides information about the client's IP address, location, and current temperature.

Welcome to your project generated using StartEase! This guide will walk you through the basic configuration steps to get your backend project up and running.

## Feature

*Retrieves the client's IP address
*Determines the client's location (city) based on their IP
*Fetches the current temperature for the client's city
*Responds with a personalized greeting including the visitor's name and temperature information

## API Endpoint

GET /api/hello?visitor_name=

## Response

{
    "client_ip": "127.0.0.1",
    "location": "New York",
    "greeting": "Hello, Mark!, the temperature is 11 degrees Celsius in New York"
}

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

- Node.js and npm: Download and install Node.js from [nodejs.org](https://nodejs.org/).

## Installation

Install project dependencies using npm :
   ```bash
   npm install
   ```
OR

Install project dependencies using yarn :
```bash
yarn install
```

### Environment Variables

Your project relies on environment variables for configuration. To set up these variables:

## Configuration

1. Create a `.env` file in the project root directory.

2. Add the following environment variables to the `.env` file:

   ```plaintext
   APP_NAME=YourAppName
   APP_PORT=3000
   APP_ENV=development
   OPEN_WEATHER_API_KEY=your_api_key_here
   ```
   Note: configuration variables should be added based on config in the environment.js file.


Replace `YourAppName`, `your-database-url`, `your-database-name`, etc., with your actual project and database information.

### Start the Project

Once you've configured your environment variables, you can start your project:

```bash
npm run dev
```

Your backend server should now be running at http://localhost:<3000>.

## Deployment

This project can be deployed to any free hosting platform that supports Node.js applications.

## Technologies Used

*Express.js
*Axios for API requests
*GeoIP-lite for IP geo location
*Winston for logging