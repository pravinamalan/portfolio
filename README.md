# Animated Marketing Hub

This project is a React + Express application using Vite for the frontend and Drizzle ORM with PostgreSQL for the backend.

## prerequisites

- Node.js (v20 or higher recommended)
- PostgreSQL database

## Setup

1.  **Install Dependencies**

    ```bash
    npm install
    ```

2.  **Database Setup**

    Ensure you have a PostgreSQL database running. Create a database (e.g., `marketing_hub`).

    Update the `.env` file with your database connection string:

    ```env
    DATABASE_URL=postgresql://username:password@localhost:5432/marketing_hub
    PORT=5000
    ```

3.  **Initialize Database Schema**

    Push the schema to your database:

    ```bash
    npm run db:push
    ```

4.  **Run Development Server**

    Start the application:

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5000`.

## Build for Production

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```
