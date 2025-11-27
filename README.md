# 💰 FinanceFlow: Personal Expense Tracker

## 🚀 Overview
FinanceFlow is a modern, full-stack application designed for tracking personal monthly expenses, income, and spending categories. It provides users with a clean dashboard to visualize their financial trends.

The project is built on a **microservice-style architecture** orchestrated by **Docker Compose**, ensuring a reliable and easy-to-run local environment. The architecture specifically includes a **Redis caching service** to optimize dashboard load times.

***

## 🛠️ Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | **React, TypeScript, Vite, Tailwind CSS** | Fast, modern development environment with a clean, responsive UI. |
| **Backend** | **Node.js/Express, TypeScript** | Robust server for API route handling and business logic. |
| **Database** | **PostgreSQL** | Reliable relational storage for all transaction and user data. |
| **ORM** | **Drizzle ORM** | Used for type-safe interaction with the PostgreSQL database. |
| **Caching** | **Redis** | Dedicated key-value store used primarily for session management and performance caching of financial summaries. |
| **DevOps** | **Docker Compose** | Orchestrates the simultaneous setup and networking of the Node.js, PostgreSQL, and Redis services. |

***

## ⚙️ Getting Started (Local Development)

### Prerequisites

* Docker Desktop (or Docker Engine)
* Node.js (LTS recommended)
* npm

### Installation Steps

1.  **Clone the Repository:**
    ```bash
    git clone [YOUR_REPO_URL]
    cd financeflow
    ```

2.  **Setup Environment Variables:**
    Create a **`.env.local`** file in the server folder. This file must contain the necessary credentials for the Docker services to start and for the Drizzle migration scripts to run.

3.  **Install Dependencies & Start Docker:**
    The root `package.json` contains scripts to handle the entire environment.
    ```bash
    npm run install:all     # Install dependencies
    npm run docker:up       # Start PostgreSQL, Redis, and Backend containers
    ```

4.  **Run Migrations:**
    The database schema must be applied to the running PostgreSQL container before the application can start.
    ```bash
    npm run db:generate # Generates migration SQL files based on schema.ts
    npm run db:migrate  # Applies migration to the PostgreSQL container
    ```

5.  **Start Development Servers:**
    Run the frontend and backend development servers simultaneously.
    ```bash
    npm run dev 
    # This command uses 'concurrently' to start the Node.js server (in Docker) and the Vite server.
    ```

***