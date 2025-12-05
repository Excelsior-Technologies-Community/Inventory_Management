📦 Inventory Management – MERN Stack Project

MongoDB • Node.js • Express • React • TailwindCSS • MERN

📋 Table of Contents

Overview

Concepts Covered

Features

Folder Structure

Prerequisites

Installation & Setup

Environment Variables

Running the Project

API Endpoints

Screenshots

Troubleshooting

🎯 Overview

Inventory Management is a full MERN stack application designed to demonstrate:

Node.js + Express backend setup

MongoDB database with Mongoose ODM

Secure environment variable handling

Complete Inventory CRUD

Advanced product querying & filtering

Pagination, sorting, and search

React frontend with TailwindCSS

This project helps you understand how to build real-world, scalable inventory systems used in shops, warehouses, and ecommerce platforms.

📚 Concepts Covered
Backend (Node.js + Express)

Express server setup

Middleware configuration (CORS, JSON parsing)

Project folder structuring

Environment variables using dotenv

MongoDB

Mongoose schema & models

Product CRUD operations

Search, filter, pagination, sorting

Indexing for fast queries

Frontend (React + TailwindCSS)

Component architecture

API integration with Axios

Filters, search, sorting UI

Responsive design

✨ Features
Inventory Features

✅ Add new products
✅ View all products
✅ Edit product details
✅ Delete / soft delete products
✅ Search products by name/description
✅ Filter by:

Category

Price range

Stock status

✅ Sort by:

Price

Name

Newest / Oldest

✅ Pagination
✅ Category management
✅ Clean UI with Tailwind

Technical Features

REST API

Proper error handling

Environment-based configuration

Production-ready folder structure

📁 Folder Structure
inventory-management/
│
├── backend/
│   ├── config/
│   │   └── db.js               # DB connection logic
│   ├── controllers/
│   │   └── productController.js
│   ├── middleware/
│   │   └── errorMiddleware.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoute.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductForm.jsx
│   │   │   ├── ProductFilters.jsx
│   │   │   ├── ProductList.jsx
│   │   │   └── InventoryPage.jsx
│   │   ├── pages/
│   │   │   ├── AllProductsPage.jsx
│   │   │   └── AddProductPage.jsx
│   │   ├── api.js
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   └── package.json
│
├── screenshots/
│   ├── image1.png
│   ├── image2.png
│   └── image3.png
│
└── README.md

🔧 Prerequisites

✔ Node.js v14 or higher
✔ MongoDB Atlas account
✔ npm or yarn
✔ Git (optional)

💻 Installation & Setup
Step 1: Clone Project
git clone <repository-url>
cd inventory-management

🛠 Backend Setup
cd backend
npm install

Backend Dependencies:

express

mongoose

cors

dotenv

nodemon (dev)

🎨 Frontend Setup
cd frontend
npm install

Frontend Dependencies:

react

axios

react-router-dom

tailwindcss

@tailwindcss/vite

🔐 Environment Variables
Backend (.env)
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/<dbname>
CLIENT_ORIGIN=http://localhost:5173

Frontend (.env)
VITE_API_URL=http://localhost:5000

🚀 Running the Project
Option 1 — Run Both Servers
▶ Backend:
cd backend
npm run dev

▶ Frontend:
cd frontend
npm run dev

📡 API Endpoints
Method	Endpoint	Description
GET	/api/products	Get products (search, filter, sort, pagination)
POST	/api/products	Add new product
PUT	/api/products/:id	Update product
DELETE	/api/products/:id	Delete product
GET	/api/products/categories	Fetch categories
🔍 Query Parameters for GET /api/products
Parameter	Description
search	Search by name/description
category	Filter products by category
minPrice	Minimum price
maxPrice	Maximum price
sort	Sort by: price, createdAt
order	asc / desc
fields	Choose fields to return
page	Pagination page
limit	Items per page
📸 Screenshots

(Add your images inside screenshots folder)

🐛 Troubleshooting
❌ MongoDB connection error?

✔ Check .env
✔ Whitelist your IP in MongoDB Atlas
✔ Correct username/password
✔ Ensure DB user has read/write access

❌ Backend not connecting?

✔ PORT 5000 free?
✔ Correct VITE_API_URL?
✔ CORS allowed?

❌ React app not updating?

✔ Hard refresh (Ctrl+Shift+R)
✔ Check console
✔ Correct API URL

📝 Additional Notes
Security Best Practices

Never commit .env

Use strong DB passwords

Restrict production IP access

Dev Tips

Use Postman for testing

Use MongoDB Atlas logs for DB errors

Restart both servers after config changes

📚 Learning Outcomes

After completing this project, you will understand:

✔ Full MERN project structure
✔ Environment variable security
✔ MongoDB + Mongoose CRUD
✔ Advanced search/filter logic
✔ React component design
✔ API integration
✔ Production best practices

❤️ Happy Coding!

A complete learning project for mastering the MERN stack.