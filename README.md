# Summarizer Dashboard

This application is a dashboard for summarizing text from a series of articles using OpenAI endpoints.

It's a monorepo consisting of two parts:

- A server that exposes an API for retrieving articles and summarizing text.
- A client that uses the API to show articles and calls the API tosummarize text.

The server is written in TypeScript and uses Express.js for the API. Along with Drizzle ORM for database interactions.

As it's a demo project, the database is stored in a SQLite local database file, which should be changed to a PostgreSQL database in production.

The client is written in Next.js and TypeScript. It uses Shadcn UI for the UI components and Tailwind CSS for styling. Requests are made using the Fetch API from Server Components and React Query for data fetching in Client Components.

## Running the application

### Prerequisites

- Docker
- Docker Compose

### Running the application with a simple script

In case you want to run the application locally, you need to have Docker and Docker Compose installed. You can run it directly with the following command:

```bash
./deploy.sh
```

In case you have permission issues with the command, you can run:

```bash
chmod +x deploy.sh && ./deploy.sh
```

### Running the application with Docker manually

Navigate to the root directory of the project and run the following command:

```bash
docker-compose build
```

Then run the following command to start the application:

```bash
docker-compose up -d
```

You can access the application at http://localhost:3000.

If you want to verify the SQLite database is working, you can run the following command:

```
docker exec -it summarizer-dashboard-backend sh
ls -l /app/db
```

You should see a file named `DB_FILE_NAME.db` in the `db` directory. Depending on the value you gave to the environment variable `DB_FILE_NAME`.
