# nodejs-mandatory-ii

# Authentication and Authorization System

This system provides authentication and authorization functionalities using bcrypt for password hashing. It supports login for two types of users:

## Users

### User 1 (Admin)
- **Email:** steffen@localhost.com
- **Password:** hello
- **Role:** admin

### User 2 (Regular User)
- **Email:** amanda@localhost.com
- **Password:** hello
- **Role:** user

## Authorization

Authorization is handled through `authMiddleware.js`. Access to the `/api/users` route and associated data is restricted to admins only.

## Toast Notifications

If an incorrect login attempt is made, the system displays a toast notification.

## Database

The system utilizes SQLite as its database.

## Backend Sessions

Session management is implemented on the backend.

## Welcome Emails

Upon signing up, users receive a welcome email, facilitated by Sendgrid.

