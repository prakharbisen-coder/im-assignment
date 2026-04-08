# User Management API (Node.js + Express)

This project is a small, internship-style backend for user management.
It includes JWT authentication, role-based authorization, and CRUD operations for users.

## What this project does

- Registers and logs in users with JWT tokens
- Supports two roles: `user` and `admin`
- Protects private routes with middleware
- Restricts admin routes with role-based authorization
- Stores user data in MongoDB using Mongoose

## Tech stack

- Node.js
- Express
- MongoDB + Mongoose
- JSON Web Token (`jsonwebtoken`)
- `bcryptjs` for password hashing
- `dotenv` for environment configuration

## Project structure

```
config/         # DB connection
controllers/    # Route handlers (business logic)
middleware/     # Auth + error handling middleware
models/         # Mongoose models
routes/         # API route definitions
server.js       # App entry point
```

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/usermanagement
JWT_SECRET=your_super_secret_key
```

3. Make sure MongoDB is running.

4. Start the server:

```bash
npm start
```

For development mode (auto-restart on changes):

```bash
npm run dev
```

## API overview

### Auth routes

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive a JWT token

### User routes (protected)

- `GET /api/users/me` - Get profile of the logged-in user

### Admin routes

- `GET /api/users` - List all users
- `PUT /api/users/:id` - Update user details
- `DELETE /api/users/:id` - Delete a user

## Notes

- Passwords are hashed before storing.
- Most user-management actions are protected by middleware.
- Error responses are centralized through custom error-handling middleware.

## Quick test flow

1. Register an admin account via `POST /api/auth/register` with `"role": "admin"`.
2. Login and copy the token.
3. Send requests to protected endpoints with:

```http
Authorization: Bearer <token>
```

---

If you are reviewing this for an assignment/demo, this README should be enough to run and test the API quickly without digging into the code first.
