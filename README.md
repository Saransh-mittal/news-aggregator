# Rapid Recap - News Aggregator App

Rapid Recap is a News Aggregator application built using the MERN (MongoDB, Express, React, Node.js) stack. It scrapes news from various websites using background job processing via a Python server, stores the data in MongoDB, and presents it to users through a user-friendly MERN web application.

## Collaborators

- **Saransh (Tech Lead)**
- **Subrat (Frontend Developer)**
- **Mayank (Data Scientist)**

## Project Overview

### Plot

Rapid Recap is a News Aggregator app designed to provide users with up-to-date news from various sources.

### Description

This application employs background job processing through a Python server to scrape news articles from multiple websites. The scraped data is then stored in a MongoDB database. Users can access this information through the MERN web application.

## Tech Stack

- **Frontend:**
  - React
  - Emotion (CSS-in-JS library)
  - Material-UI
  - Axios
  - Bootstrap
  - React-Bootstrap
  - React-Router-DOM

- **Backend:**
  - Node.js (with Express)
  - MongoDB (with Mongoose)
  - Bcryptjs (for password hashing)
  - Cookie-Parser
  - Dotenv (for environment variables)
  - JSON Web Tokens (JWT)
  - Nodemon (for automatic server restarts)

## Getting Started

### Installation

To get the project up and running, follow these steps:

1. Clone the repository to your local machine.
2. Install server dependencies using the following command:

   ```bash
   npm install
   ```

3. Install client dependencies:

   ```bash
   npm run clientinstall
   ```

### Scripts

- **Start the server:**

  ```bash
  npm run server
  ```

- **Start the client:**

  ```bash
  npm run client
  ```

- **Start both the server and client concurrently in development mode:**

  ```bash
  npm run dev
  ```

## Additional Information

- The client application was built using Vite.
- A home page with pagination was implemented to enable infinite scrolling.
- The project utilizes various React hooks, including useState, useContext, useEffect, useRef, and useReducer.

## Future Goals

The project has several exciting future goals, including:

- **More Personalized News View:** Implement user-specific preferences and personalized news recommendations to enhance the user experience.

- **Profile View:** Develop user profiles that allow users to customize their preferences, save articles, and track their reading history.

These are just a few of the potential enhancements for Rapid Recap. We encourage contributors and developers to join the project and help us achieve these goals. If you have any questions or suggestions, please don't hesitate to reach out to the collaborators mentioned above. Happy coding!

