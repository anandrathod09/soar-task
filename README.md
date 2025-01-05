
# React Application Setup and Installation

This guide provides instructions for installing and running a React project built with **Vite**. Follow the steps below to set up the development environment, run the application, and build the production version.

---

## Prerequisites

Ensure that you have the following installed on your machine:

- **Node.js**: Version >= 14.16 (Recommended Version). [Download Node.js here](https://nodejs.org/)
- **NPM**: Comes pre-installed with Node.js.
- **Vite**: The development tooling used for this project.

---

## Installation Steps

1. **Navigate to the Project Directory**  
   Open a terminal and move to the root directory of the project:

   ```bash
   cd /path/to/project
   ```

2. **Install Dependencies**  
   Run the following command to install all the required dependencies:

   ```bash
   npm install
   ```

3. **Start the Development Server**  
   Use the following command to start the development server:

   ```bash
   npm run dev
   ```

4. **Access the Application**  
   Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

---

## Building the Production Version

To generate a production-ready build of the application, follow these steps:

1. Run the build command:

   ```bash
   npm run build
   ```

2. **Output Directory**  
   The production build files will be located in the `/dist` directory in the project root.

3. **Deploying to a Server**  
   Upload the contents of the `/dist` directory to your web server for deployment.

---

### Notes

- For additional configuration or troubleshooting, refer to the documentation for [Vite](https://vitejs.dev/).
- Ensure that your server is configured to serve static files from the `/dist` directory if deploying to production.
