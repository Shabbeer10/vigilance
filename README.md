# Basic SIEM with MEAN Stack

A basic SIEM (Security Information and Event Management) system built using the MEAN (MongoDB, Express, Angular, Node.js) stack. This project demonstrates log ingestion, parsing, rule-based alert generation, and a simple dashboard for monitoring logs and alerts.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Log Ingestion:** Receive logs via a POST endpoint.
- **Rule Engine:** A basic rule engine that generates alerts (e.g., for failed login attempts).
- **Data Storage:** Logs and alerts are stored in MongoDB.
- **API Endpoints:** Retrieve logs and alerts using RESTful API endpoints.
- **Dashboard:** Angular-based dashboard to display logs and alerts in real-time.

## Tech Stack

- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** Angular
- **Other Tools:** Nodemon, dotenv, body-parser

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12+)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local or MongoDB Atlas)
- [Angular CLI](https://angular.io/cli) (for running the frontend)

### Installation

1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/basic-siem-mean.git
cd basic-siem-mean
```

2. **Setup the Backend**

Navigate to the backend directory and install dependencies:

```bash
cd basic-siem-backend
npm install
```

Create a .env file in the basic-siem-backend directory with the following content:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
Setup the Frontend
```

3. **Setup the Frontend**

In a separate terminal window, navigate to the frontend directory and install dependencies:

```bash
cd basic-siem-frontend
npm install
```

### Running the Project

Backend
Start the backend server in development mode:

```bash
cd basic-siem-backend
npm run dev
```

The backend will run on http://localhost:5000.

Frontend
Start the Angular development server:

```bash
cd basic-siem-frontend
ng serve
```

The Angular app will run on http://localhost:4200.

Usage
Ingesting Logs
You can simulate log ingestion using Postman or cURL. For example, to ingest a log:

```bash
curl -X POST http://localhost:5000/api/ingest \
     -H "Content-Type: application/json" \
     -d '{
           "source": "auth-service",
           "level": "error",
           "message": "Failed login for user admin",
           "details": {"ip": "192.168.1.10"}
         }'
```

Viewing Logs and Alerts
Logs: Visit <http://localhost:5000/api/logs> to view ingested logs.
Alerts: Visit <http://localhost:5000/api/alerts> to view generated alerts.
Dashboard
Access the Angular dashboard at <http://localhost:4200> to see logs and alerts in a user-friendly interface.

## Contributing

Contributions are welcome! Please fork this repository, create a new branch for your feature or bug fix, and submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License.
