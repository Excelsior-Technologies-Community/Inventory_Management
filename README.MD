# 📦 Inventory Management System

A full-stack MERN (MongoDB, Express.js, React, Node.js) application for managing product inventory with advanced features like search, filtering, pagination, and image uploads.

![MERN Stack](https://img.shields.io/badge/MERN-Stack-green)
![Node.js](https://img.shields.io/badge/Node.js-18+-blue)
![React](https://img.shields.io/badge/React-19+-61dafb)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4+-38bdf8)

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
- [Screenshots](#-screenshots)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Overview

The Inventory Management System is a comprehensive web application built with the MERN stack that allows users to efficiently manage product inventories. It provides a user-friendly interface for adding, viewing, editing, and deleting products, along with advanced search and filtering capabilities.

This project demonstrates modern web development practices including:
- RESTful API design
- File upload handling
- Database indexing for performance
- Responsive UI design
- Error handling and validation

## ✨ Features

### Core Functionality
- ✅ **Product CRUD Operations**: Create, Read, Update, Delete products
- ✅ **Image Upload**: Support for product images with file validation
- ✅ **Soft Delete**: Products are marked as deleted instead of permanent removal
- ✅ **Real-time Search**: Search products by name and description
- ✅ **Advanced Filtering**: Filter by category, price range, and stock status
- ✅ **Sorting Options**: Sort by price, name, or creation date
- ✅ **Pagination**: Efficient handling of large product catalogs

### Technical Features
- 🔒 **Secure File Upload**: Image validation and size limits
- 📊 **Database Indexing**: Optimized queries with MongoDB indexes
- 🎨 **Responsive Design**: Mobile-first approach with TailwindCSS
- ⚡ **Performance Optimized**: Efficient API responses and client-side rendering
- 🛡️ **Error Handling**: Comprehensive error management on both client and server
- 🔧 **Environment Configuration**: Secure environment variable management

## 🛠 Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Multer** - File upload middleware
- **CORS** - Cross-origin resource sharing
- **bcrypt** - Password hashing (for future auth features)
- **jsonwebtoken** - JWT authentication (for future auth features)

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS 4** - Utility-first CSS framework
- **Axios** - HTTP client
- **React Icons** - Icon library

### Development Tools
- **Nodemon** - Auto-restart for development
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **MongoDB Atlas** account or local MongoDB instance
- **Git** (optional, for cloning the repository)
- **npm** or **yarn** package manager

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd inventory-management
```

### 2. Backend Setup
```bash
cd Backend
npm install
```

### 3. Frontend Setup
```bash
cd ../InventoryManagement
npm install
```

## 🔧 Environment Setup

### Backend Environment Variables
Create a `.env` file in the `Backend` directory:

```env
PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/inventory_management
NODE_ENV=development
```

### Frontend Environment Variables
Create a `.env` file in the `InventoryManagement` directory:

```env
VITE_API_URL=http://localhost:3000
```

### MongoDB Setup
1. Create a MongoDB Atlas account at [mongodb.com](https://mongodb.com)
2. Create a new cluster
3. Set up database user credentials
4. Whitelist your IP address
5. Get your connection string and update the `MONGODB_URI` in `.env`

## ▶️ Running the Application

### Development Mode

#### Start Backend Server
```bash
cd Backend
npm run dev
```
The backend server will start on `http://localhost:3000`

#### Start Frontend Development Server
```bash
cd InventoryManagement
npm run dev
```
The frontend will be available at `http://localhost:5173`

### Production Build
```bash
cd InventoryManagement
npm run build
npm run preview
```

## 📡 API Documentation

The API follows RESTful conventions and returns JSON responses with a consistent structure:

```json
{
  "success": true,
  "data": {...},
  "message": "Operation successful",
  "pagination": {...} // for list endpoints
}
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products with filtering, sorting, and pagination |
| GET | `/api/products/:id` | Get single product by ID |
| POST | `/api/products` | Create new product (supports file upload) |
| PUT | `/api/products/:id` | Update existing product (supports file upload) |
| DELETE | `/api/products/:id` | Soft delete product |

### Query Parameters for GET /api/products

| Parameter | Type | Description |
|-----------|------|-------------|
| `search` | string | Search in name and description |
| `category` | string | Filter by product category |
| `minPrice` | number | Minimum price filter |
| `maxPrice` | number | Maximum price filter |
| `sortBy` | string | Sort field: `createdAt`, `name`, `price` |
| `sortOrder` | string | Sort order: `asc`, `desc` |
| `page` | number | Page number for pagination |
| `limit` | number | Items per page (default: 10) |

### File Upload
- **Supported formats**: JPEG, PNG, WebP, AVIF
- **Maximum file size**: 5MB
- **Upload endpoint**: `POST /api/products` or `PUT /api/products/:id`
- **Form field name**: `image`

## 📁 Project Structure

```
inventory-management/
├── Backend/
│   ├── controllers/
│   │   └── productController.js    # Product CRUD operations
│   ├── models/
│   │   └── Product.js              # Product schema and model
│   ├── routes/
│   │   └── productRoutes.js        # API routes
│   ├── uploads/                    # Uploaded product images
│   ├── index.js                    # Express server setup
│   ├── package.json
│   └── package-lock.json
├── InventoryManagement/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductForm.jsx     # Add/Edit product form
│   │   │   └── ProductList.jsx     # Product listing with filters
│   │   ├── App.jsx                 # Main React component
│   │   ├── main.jsx                # React entry point
│   │   ├── index.css               # Global styles
│   │   └── assets/
│   ├── Screenshot/                 # Application screenshots
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── README.md
└── README.md                        # This file
```

## 📸 Screenshots

### Product Inventory Dashboard
![Product List](Screenshot/screencapture-localhost-5173-2025-12-05-13_26_55.png)

### Add New Product Form
![Add Product](Screenshot/screencapture-localhost-5173-2025-12-05-13_27_05.png)

### Product Details and Edit
![Product Details](Screenshot/screencapture-localhost-5173-2025-12-05-13_27_16.png)

## 🔧 Troubleshooting

### Common Issues

#### MongoDB Connection Error
**Symptoms**: Server fails to start with connection errors
**Solutions**:
- Verify MongoDB Atlas credentials in `.env`
- Check IP whitelist in MongoDB Atlas
- Ensure database user has read/write permissions
- Test connection string in MongoDB Compass

#### File Upload Issues
**Symptoms**: Images not uploading or displaying
**Solutions**:
- Check file size (max 5MB)
- Verify supported formats (JPEG, PNG, WebP, AVIF)
- Ensure `uploads/` directory exists and is writable
- Check server logs for multer errors

#### CORS Errors
**Symptoms**: Frontend can't communicate with backend
**Solutions**:
- Verify `VITE_API_URL` matches backend port
- Check CORS configuration in backend
- Ensure backend is running on correct port

#### React App Not Updating
**Symptoms**: Changes not reflecting in browser
**Solutions**:
- Hard refresh (Ctrl+Shift+R)
- Clear browser cache
- Check browser console for errors
- Restart development server

#### Port Already in Use
**Symptoms**: Server fails to start with EADDRINUSE error
**Solutions**:
- Kill process using the port: `npx kill-port 3000`
- Change port in `.env` file
- Check for other Node.js processes

### Development Tips
- Use browser developer tools for debugging
- Check server logs in terminal for backend errors
- Use React DevTools for component debugging
- Test API endpoints with tools like Postman or Thunder Client

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow ESLint configuration
- Write meaningful commit messages
- Test API endpoints thoroughly
- Ensure responsive design on mobile devices
- Add proper error handling

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [MongoDB Atlas](https://mongodb.com/atlas) for database hosting
- [TailwindCSS](https://tailwindcss.com) for styling
- [React](https://reactjs.org) for the UI framework
- [Express.js](https://expressjs.com) for the backend framework

---

**Happy Coding! 🚀**

Built with ❤️ using the MERN stack
