# Ticket Booking App

This is a ticket booking application built using NestJS, Postgres, and Docker. It allows users to book tickets for various events.

## Installation

### Without Docker Setup

1. Clone the repository:

```bash
git clone https://github.com/SuyeshBadge/Ticket-Booking-App.git
```

2. Install dependencies:

```bash
cd ticket-booking-app
npm install
```

3. Set up the Postgres database:

   - Create a new Postgres database.
   - Update the database configuration in the `.env` file with your database credentials.

4. Run database migrations:

5. Start the application:

```bash
npm run start:prod
```

6. The application will be running at `http://localhost:2023`.

### With Docker Setup

1. Clone the repository:

```bash
git clone https://github.com/SuyeshBadge/Ticket-Booking-App.git
```

2. Install Docker and Docker Compose if you haven't already.

3. Set up the Postgres database:

   - Update the database configuration in the `docker-compose.yml` file with your database credentials or add them in `.env` .

4. Build and start the Docker containers:

```bash
cd ticket-booking-app
docker-compose up -d
```

5. The application will be running at `http://localhost:2023`.

## Usage

Once the application is running, you can use the provided API endpoints to interact with the ticket booking system. Here are some of the available endpoints:

- `GET /ticket/:id`: Get details of a specific ticket.
- `POST /ticket`: Create a new ticket.
- `PATCH /ticket/:id`: Update details of a specific ticket.
- `DELETE /ticket/:id`: Delete a specific ticket.

Make sure to check the API documentation or the source code for a complete list of available endpoints and their usage.

## Configuration

The configuration of the application can be modified by editing the `.env` file. You can change the database credentials, port number, and other settings according to your requirements.

## Postman Documentation

`https://documenter.getpostman.com/view/18664915/2s93sjV9ZP#c56e1edc-e7a6-427b-827a-6e65c630b034`