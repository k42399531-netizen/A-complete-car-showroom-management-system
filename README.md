# Car Rental Backend API

A robust and secure Backend API for a Car Rental System, built with Node.js, Express, and MongoDB. This project manages car inventory, user authentication, and vehicle rental processes.

## 🚀 Features
- **User Authentication:** Secure registration and login system using JWT (JSON Web Tokens).
- **Role-Based Access Control (RBAC):** Middleware-protected routes to differentiate between standard users and administrators.
- **Inventory Management:** Complete CRUD operations for car listings (Brand, Model, Year, Price, etc.).
- **Rental System:** Automated logic to calculate rental duration and total price.
- **Data Integrity:** Schema validation using Mongoose to ensure data consistency.

## 🛠 Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Security:** bcrypt (password hashing), jsonwebtoken (auth)
- **Environment:** dotenv (for secure configuration management)

## 📋 Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local instance or Atlas cloud)

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
   cd your-repo-name
