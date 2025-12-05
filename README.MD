# 📦 Inventory Management System

A full-stack MERN (MongoDB, Express.js, React, Node.js) application for managing product inventory with advanced features like search, filtering, sorting, and image uploads.

![MERN Stack](https://img.shields.io/badge/MERN-Stack-green)
![Node.js](https://img.shields.io/badge/Node.js-18+-blue)
![React](https://img.shields.io/badge/React-19+-61dafb)
![MongoDB](https://img.shields.io/badge/MongoDB-7+-47a248)
![License](https://img.shields.io/badge/License-ISC-yellow)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Setup](#-environment-setup)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Overview

The Inventory Management System is a comprehensive web application that allows users to manage product inventory efficiently. Built with the MERN stack, it provides a modern, responsive interface for performing CRUD operations on products with advanced querying capabilities.

### Key Capabilities

- **Product Management**: Complete CRUD operations with soft delete functionality
- **Advanced Search & Filtering**: Search by name/description, filter by category and price range
- **Image Upload**: Support for product image uploads with preview functionality
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Real-time Updates**: Dynamic product listing with pagination and sorting

## ✨ Features

### Core Features
- ✅ **Product CRUD Operations**
  - Add new products with image upload
  - View detailed product information
  - Edit existing product details
  - Soft delete products (maintains data integrity)

- ✅ **Advanced Product Querying**
  - Full-text search across name and description
  - Filter by category
  - Price range filtering
  - Sort by date created, name, or price
  - Pagination for large datasets

- ✅ **Image Management**
  - Upload product images (max 5MB)
  - Image preview functionality
  - Automatic image serving via Express static middleware

- ✅ **User Interface**
  - Responsive design for all devices
  - Modern UI with Tailwind CSS
  - Loading states and error handling
  - Confirmation dialogs for destructive actions

### Technical Features
- RESTful API architecture
- MongoDB with Mongoose ODM
- JWT authentication ready (dependencies included)
- File upload handling with Multer
- CORS enabled for cross-origin requests
- Environment-based configuration
- Error handling and logging

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (jsonwebtoken) + bcrypt
- **File Upload**: Multer
- **CORS**: cors middleware
- **Development**: nodemon

### Frontend
- **Library**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Icons**: React Icons

### Development Tools
- **Version Control**: Git
- **Package Manager**: npm
- **Code Quality**: ESLint
- **CSS Processing**: PostCSS with Autoprefixer

## 🔧 Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - Either:
  - MongoDB Community Server (local installation)
  - MongoDB Atlas (cloud database)
- **npm** or **yarn** package manager
- **Git** for version control

## 📦 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd inventory-management
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# The backend dependencies include:
# - express: Web framework
# - mongoose: MongoDB ODM
# - cors: Cross-origin resource sharing
# - jsonwebtoken: JWT authentication
# - bcrypt: Password hashing
# - multer: File upload handling
# - nodemon: Development auto-restart
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd ../InventoryManagement

# Install dependencies
npm install

# The frontend dependencies include:
# - react: UI library
# - react-dom: React DOM rendering
# - axios: HTTP client
# - react-icons: Icon library
# - tailwindcss: Utility-first CSS framework
# - vite: Build tool and dev server
```

## 🔐 Environment Setup

### Backend Environment Variables
Create a `.env` file in the `Backend/` directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/inventory_management
# For MongoDB Atlas, use:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/inventory_management

# CORS Configuration (optional)
CLIENT_ORIGIN=http://localhost:5173
```

### Frontend Environment Variables
Create a `.env` file in the `InventoryManagement/` directory:

```env
# API Configuration
VITE_API_URL=http://localhost:3000
```

## 🚀 Running the Application

### Development Mode

1. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   ```

2. **Start Backend Server**
   ```bash
   cd Backend
   npm run dev
   ```
   Server will start on `http://localhost:3000`

3. **Start Frontend Development Server**
   ```bash
   cd InventoryManagement
   npm run dev
   ```
   Application will be available at `http://localhost:5173`

### Production Build

1. **Build Frontend**
   ```bash
   cd InventoryManagement
   npm run build
   ```

2. **Start Backend in Production**
   ```bash
   cd Backend
   npm start
   ```

## 📡 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Endpoints

#### Health Check
- **GET** `/health`
- Returns server status

#### Products

- **GET** `/products`
  - Get all products with optional filtering
  - Query Parameters:
    - `search`: Search in name/description
    - `category`: Filter by category
    - `minPrice`: Minimum price filter
    - `maxPrice`: Maximum price filter
    - `sortBy`: Sort field (createdAt, name, price)
    - `sortOrder`: Sort order (asc, desc)
    - `page`: Page number (default: 1)
    - `limit`: Items per page (default: 10)

- **GET** `/products/:id`
  - Get single product by ID

- **POST** `/products`
  - Create new product
  - Content-Type: `multipart/form-data`
  - Required fields: name, sku, price
  - Optional: category, stock, description, image

- **PUT** `/products/:id`
  - Update existing product
  - Content-Type: `multipart/form-data`

- **DELETE** `/products/:id`
  - Soft delete product

### Response Format
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful",
  "pagination": { ... } // For list endpoints
}
```

## 📁 Project Structure

```
inventory-management/
├── Backend/                          # Node.js Express Backend
│   ├── controllers/
│   │   └── productController.js      # Product CRUD logic
│   ├── models/
│   │   └── Product.js                # MongoDB Product schema
│   ├── routes/
│   │   └── productRoutes.js          # API routes
│   ├── uploads/                      # Uploaded product images
│   ├── index.js                      # Server entry point
│   ├── package.json                  # Backend dependencies
│   └── package-lock.json
├── InventoryManagement/              # React Frontend
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductForm.jsx       # Add/Edit product form
│   │   │   └── ProductList.jsx       # Product listing with filters
│   │   ├── App.css
│   │   ├── App.jsx                   # Main app component
│   │   ├── index.css
│   │   └── main.jsx                  # React entry point
│   ├── index.html
│   ├── package.json                  # Frontend dependencies
│   ├── vite.config.js                # Vite configuration
│   ├── tailwind.config.js            # Tailwind CSS config
│   ├── postcss.config.js             # PostCSS config
│   └── eslint.config.js              # ESLint config
├── .gitignore                        # Git ignore rules
└── README.md                         # Project documentation
```

## 💡 Usage

### Adding a Product
1. Click "Add Product" button
2. Fill in required fields (Name, SKU, Price)
3. Optionally add category, stock, description, and image
4. Click "Add Product" to save

### Searching and Filtering
- Use the search bar to find products by name or description
- Filter by category or price range
- Sort results by date, name, or price
- Navigate through pages using pagination controls

### Editing Products
- Click "Edit" on any product card
- Modify the information in the form
- Upload a new image if needed
- Save changes

### Deleting Products
- Click "Delete" on a product card
- Confirm the deletion in the dialog

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error**
- Ensure MongoDB is running locally or Atlas IP is whitelisted
- Check `MONGODB_URI` in `.env` file
- Verify database user credentials

**Frontend Not Loading**
- Confirm backend server is running on port 3000
- Check `VITE_API_URL` in frontend `.env`
- Clear browser cache and hard refresh (Ctrl+Shift+R)

**Image Upload Issues**
- Ensure `uploads/` directory exists in backend
- Check file size (max 5MB)
- Verify image file format

**CORS Errors**
- Confirm `CLIENT_ORIGIN` matches frontend URL
- Check browser console for detailed error messages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow ESLint configuration
- Write descriptive commit messages
- Test API endpoints with tools like Postman
- Ensure responsive design on mobile devices

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [MongoDB](https://www.mongodb.com/) for the database
- [Express.js](https://expressjs.com/) for the web framework
- [React](https://reactjs.org/) for the frontend library
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for the build tool

---

**Happy Coding! 🚀**

Built with ❤️ using the MERN stack