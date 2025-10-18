# Profile Endpoint API

A simple Node.js/Express API that provides a profile endpoint with user information and a random cat fact.

## 🚀 Features

- **Profile Information**: Returns user details including name, email, and tech stack
- **Random Cat Facts**: Fetches and includes a random cat fact from an external API
- **Timestamp**: Includes current timestamp in ISO format
- **Error Handling**: Graceful error handling with appropriate HTTP responses
- **Environment Configuration**: Uses environment variables for port configuration

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/Dayesoro/profile-endpoint.git
cd profile-endpoint
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory (optional):

```env
PORT=3050
```

## 🚀 Usage

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The server will start on port 3050 by default (or the port specified in your environment variables).

Once the server is running, you can access the API at:

- **Profile Endpoint**: `http://localhost:3050/me`
- **Default Port**: 3050 (or your custom PORT environment variable)

## 📡 API Endpoints

### GET `/me`

Returns user profile information along with a random cat fact.

**Response Format:**

```json
{
  "status": "success",
  "user": {
    "email": "dayesoro@gmail.com",
    "name": "Daniel Ayesoro",
    "stack": "Node.js/Express"
  },
  "timestamp": "2024-01-15T10:30:00.000Z",
  "fact": "A random cat fact from the external API"
}
```

**Error Response:**

```json
{
  "error": "Error message describing what went wrong"
}
```

## 🔧 Dependencies

- **express**: Web framework for Node.js
- **dotenv**: Loads environment variables from .env file
- **nodemon**: Development dependency for auto-restarting the server

## 🌐 External API

This project integrates with the [Cat Facts API](https://catfact.ninja/) to fetch random cat facts.

## 🚀 Deployment

This application can be deployed to any Node.js hosting platform such as:

- Heroku
- Vercel
- Railway
- DigitalOcean App Platform

Make sure to set the `PORT` environment variable if required by your hosting platform.
