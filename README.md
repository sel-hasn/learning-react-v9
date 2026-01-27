# Learning React v9

> **Note:** This repository contains code written while following Brian Holt's [Complete Intro to React v9](https://frontendmasters.com/courses/complete-react-v9/) on Frontend Masters. It is for educational purposes and personal reference.

## About

This project serves as a "code notebook" to document my progress in mastering React.js. Coming from a C/C++ background, the goal of this repository is not just to build UI, but to understand the underlying mechanisms of the Virtual DOM, state management, and component lifecycles.

## Tech Stack

- **Framework:** React 18+
- **Build Tool:** Vite (replaced `create-react-app`)
- **Language:** JavaScript / TypeScript
- **Styling:** Tailwind CSS
- **Routing:** TanStack Router
- **Data Fetching:** TanStack Query (React Query)
- **State Management:** React Hooks (`useState`, `useEffect`, `useContext`)

## Concepts Covered

- **Pure React:** Creating elements without JSX to understand `React.createElement`.
- **Hooks Deep Dive:** Managing state and side effects.
- **Custom Hooks:** Building reusable logic with hooks like `usePizzaOfTheDay` and `useCurrency`.
- **Context API:** Managing global state without prop drilling.
- **TanStack Router:** File-based routing with lazy loading and nested routes.
- **TanStack Query:** Server state management with caching, pagination, and background refetching.
- **Portals & Modals:** Rendering components outside the DOM hierarchy.
- **Async State:** Fetching data from external APIs.

## How to Run

1.  Clone the repository:
    ```bash
    git clone https://github.com/sel-hasn/learning-react-v9
    cd learning-react-v9
    ```
2.  Navigate to a specific lesson folder:
    ```bash
    cd 11-modals  # or any other lesson folder
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```

> **Note:** Each lesson folder is a standalone project. Make sure the API server is running at `http://localhost:3000` (from the `api/` folder) for lessons that require backend data.

## License

This project is for learning purposes. Original course concepts belong to Frontend Masters and Brian Holt.
