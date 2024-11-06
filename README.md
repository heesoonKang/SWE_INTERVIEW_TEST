# Simple Card List Application

This project is a simple card list application with a backend server built using Express.js and a frontend built using React. 

## Requirements
- **Node.js** (Preferably v16 or v18 for compatibility)
- **npm** (Node Package Manager)

## Setup Instructions

### 1. Clone the repository to your local machine

### 2. Open in Visual Studio Code

### 3. Backend Setup
Run the following command in backend directory to start the local server.
- ```cd SWE_INTERVIEW_TEST/StarterCode/backend ```
- ```npm install```
- ```npx nodemon index.js```

Requirement:
- Please make sure to install dependensies
```npm install```

### 4. Frontend Setup
Open another terminal while backend is running, navigate to the frontend directory, install dependencies, and start the frontend server:
- ```cd SWE_INTERVIEW_TEST/StarterCode/frontend ```
- ```npm install```
- ```npm start```

Additional Requirements
- This project requires Node.js v16 or v18. To check your current Node.js version, run: ```node -v```

If your Node.js version is not v16 or v18, you can switch to the correct version using Node Version Manager (nvm). Here’s how!
1. Install nvm (if not installed already)
- ```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash```
2. Restart your terminal by running following: 
- ```source ~/.bashrc```
3. Install Node.js v16
- ```npm install 16```
4. Switch to the installed version (replace 16 or 18 with the version you prefer):
- ```nvm use 16```
5. Reinstall dependencies:
Delete node_modules and package-lock.json in your frontend directory:
- ```Delete node_modules and package-lock.json in your frontend directory```
6. Reinstall npm
- ```npm install```
7. Start the Development Server
- ```npm start```

### 5. Output
Once both backend and frontend server is working, open ```http://localhost:3000```






