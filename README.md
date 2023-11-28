# Ecommerce-WebApp

This repository contains the source code for the Ecommerce-WebApp.

## Getting Started

To run this project locally, you'll need to follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/CraZyphr/Ecommerce-WebApp.git
cd ecomm
```

### 2. Install Dependencies

Run the following command to install the project dependencies:

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env` file in the root of the project and fill in the necessary values. You can use the provided `renameto(.env)` as a template.

```bash
cd .renameto(.env) .env
```

Edit the `.env` file and fill in the required values for your environment.

### 4. Start the Development Server

```bash
npm run dev
```

This will start the development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the production application.
- `npm start`: Start the production server.
- `npm run lint`: Run ESLint for code linting.

## Dependencies

This project uses the following dependencies:

```json
{
  "dependencies": {
    "@auth/mongodb-adapter": "^2.0.6",
    "@reduxjs/toolkit": "^1.9.7",
    "axios": "^1.6.2",
    "bcrypt": "^5.1.1",
    "formik": "^2.4.5",
    "googleapis": "^128.0.0",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.3.0",
    "mongoose": "^8.0.1",
    "next": "14.0.3",
    "next-auth": "^4.24.5",
    "next-connect": "^1.0.0",
    "next-redux-wrapper": "^8.1.0",
    "nodemailer": "^6.9.7",
    "react": "^18",
    "react-dom": "^18",
    "react-icons": "^4.12.0",
    "react-redux": "^8.1.3",
    "react-spinners": "^0.13.8",
    "redux": "^4.2.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-persist": "^6.0.0",
    "redux-thunk": "^2.4.2",
    "sass": "^1.69.5",
    "yup": "^1.3.2"
  },
  "devDependencies": {
    "eslint": "^8",
    "eslint-config-next": "14.0.3"
  }
}
```

Please make sure to install these dependencies before running the application.

## Contributing

Feel free to contribute to this project by creating issues, submitting pull requests, or providing feedback.

Happy coding!
```
