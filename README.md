# 📝 ThinkBoard

> A modern MERN-based note-taking application with secure backend APIs and MongoDB integration, deployed on Render.

![JavaScript](https://img.shields.io/badge/JavaScript-98%25-yellow)
![Deployment](https://img.shields.io/badge/Deployment-Render-46E3B7)
![License](https://img.shields.io/badge/License-ISC-blue)

🔗 **[Live Application](https://thinkboard-4krh.onrender.com/)**

---

## 🎯 Overview

**ThinkBoard** is a full-stack note-taking application built with the MERN (MongoDB, Express, React, Node.js) stack. It provides users with a secure, intuitive platform to create, manage, and organize their thoughts and notes efficiently. The application features a robust backend with secure APIs and a responsive frontend interface.

---

## ✨ Features

- 📝 **Create & Manage Notes** - Create, edit, and delete notes with ease
- 🔒 **Secure Backend** - Express.js backend with authentication and authorization
- 🗄️ **MongoDB Integration** - Persistent data storage with MongoDB
- 🚀 **RESTful APIs** - Well-designed and documented API endpoints
- 🎨 **Modern UI** - React-based responsive frontend with Tailwind CSS & DaisyUI
- ⚡ **Rate Limiting** - Upstash Redis integration for API rate limiting
- 🔄 **Real-time Updates** - Axios-based HTTP client for seamless data synchronization
- 📱 **Responsive Design** - Mobile-friendly interface using Tailwind CSS
- 🎯 **User-Friendly** - Intuitive interface with toast notifications for better UX

---

## 🏗️ Tech Stack

### Frontend
- **React** `^19.2.7` - UI library
- **Vite** `^8.1.1` - Build tool and dev server
- **Tailwind CSS** `^3.4.19` - Utility-first CSS framework
- **DaisyUI** `^4.12.24` - Tailwind CSS component library
- **React Router** `^8.2.0` - Client-side routing
- **Axios** `^1.18.1` - HTTP client
- **React Hot Toast** `^2.6.0` - Toast notifications
- **Lucide React** `^1.24.0` - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express** `^5.2.1` - Web framework
- **MongoDB** - Database
- **Mongoose** `^7.8.11` - MongoDB ODM
- **CORS** `^2.8.6` - Cross-Origin Resource Sharing
- **Dotenv** `^17.4.2` - Environment variables
- **Upstash Redis** `^1.38.0` - Redis client
- **Upstash Rate Limit** `^2.0.8` - Rate limiting
- **Nodemon** `^3.1.14` - Development auto-reload

---

## 📦 Project Structure

```
ThinkBoard/
├── frontend/                    # React frontend application
│   ├── src/                    # Source files
│   ├── package.json            # Frontend dependencies
│   ├── vite.config.js          # Vite configuration
│   └── tailwind.config.js       # Tailwind CSS configuration
├── backend/                    # Express backend application
│   ├── src/                    # Source files
│   │   └── server.js           # Main server file
│   ├── package.json            # Backend dependencies
│   └── .env                    # Environment variables
├── .postman/                   # Postman collection files
├── postman/                    # Additional Postman resources
└── package.json                # Root package.json
```

---

## 🚀 Quick Start

### 🌐 Try the Live Application
Visit the deployed application: **[https://thinkboard-4krh.onrender.com/](https://thinkboard-4krh.onrender.com/)**

### 💻 Run Locally

#### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB account and connection string
- Upstash Redis account (for rate limiting)

#### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MinazurRahman/ThinkBoard.git
   cd ThinkBoard
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

#### Environment Configuration

Create a `.env` file in the `backend` directory with the following variables:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Upstash Redis
UPSTASH_REDIS_URL=your_upstash_redis_url
UPSTASH_REDIS_TOKEN=your_upstash_redis_token

# Server
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

#### Running Locally

1. **Start the Backend**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

2. **Start the Frontend** (in a new terminal)
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Build for Production**
   ```bash
   # Frontend
   cd frontend
   npm run build

   # Backend
   cd backend
   npm start
   ```

---

## 🌐 Deployment

ThinkBoard is deployed on **Render**, a modern cloud platform for building and deploying web applications.

### Live URL
🔗 **[https://thinkboard-4krh.onrender.com/](https://thinkboard-4krh.onrender.com/)**

### Deployment Steps on Render

1. **Push your code to GitHub** (already done ✓)

2. **Create a new Web Service on Render**
   - Connect your GitHub repository
   - Select the main branch
   - Set runtime to Node.js

3. **Configure Environment Variables**
   - Add all required variables from `.env` in Render dashboard

4. **Set Build and Start Commands**
   - **Build Command**: `npm install && cd backend && npm install && cd ../frontend && npm run build`
   - **Start Command**: `cd backend && npm start`

5. **Deploy**
   - Render will automatically deploy and provide a live URL

---

## 📚 API Documentation

The backend provides RESTful API endpoints for note management. You can find the Postman collection in the `.postman/` directory for testing.

### Base URL
```
https://thinkboard-4krh.onrender.com/api
```

### Available Endpoints
- `GET /notes` - Retrieve all notes
- `POST /notes` - Create a new note
- `GET /notes/:id` - Retrieve a specific note
- `PUT /notes/:id` - Update a note
- `DELETE /notes/:id` - Delete a note

For detailed API documentation, refer to the Postman collection files included in the repository.

---

## 🔐 Security Features

- ✅ **CORS Protection** - Configured CORS to allow only authorized origins
- ✅ **Rate Limiting** - Upstash Redis-powered rate limiting prevents abuse
- ✅ **MongoDB Security** - Connection string stored securely in environment variables
- ✅ **Environment Variables** - Sensitive data protected using dotenv
- ✅ **Express Security** - Built-in security middleware for production

---

## 🛠️ Development Scripts

### Frontend
```bash
npm run dev      # Start development server with Vite
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linter (oxlint)
```

### Backend
```bash
npm run dev      # Start with auto-reload (nodemon)
npm start        # Start production server
```

---

## 📋 Key Features Explained

### Create Notes
Users can quickly create new notes with a simple interface. Notes are stored in MongoDB with automatic timestamps.

### Edit Notes
Modify existing notes anytime with real-time feedback through toast notifications.

### Delete Notes
Remove notes permanently with confirmation to prevent accidental deletions.

### Rate Limiting
API endpoints are protected with Upstash Redis-based rate limiting to prevent abuse and ensure fair usage.

### Responsive Design
The frontend is built with Tailwind CSS and DaisyUI components, ensuring a beautiful experience on desktop and mobile devices.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to improve ThinkBoard.

### Steps to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Minazur Rahman**
- GitHub: [@MinazurRahman](https://github.com/MinazurRahman)
- Repository: [ThinkBoard](https://github.com/MinazurRahman/ThinkBoard)
- Live Application: [https://thinkboard-4krh.onrender.com/](https://thinkboard-4krh.onrender.com/)

---

## 🙏 Acknowledgments

- [React Documentation](https://react.dev)
- [Express.js Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Tailwind CSS](https://tailwindcss.com)
- [DaisyUI](https://daisyui.com)
- [Render Deployment Platform](https://render.com)
- [Upstash](https://upstash.com)

---

## 📞 Support

For support, please open an issue on the [GitHub Issues](https://github.com/MinazurRahman/ThinkBoard/issues) page.

---

<div align="center">

**Made with ❤️ by Minazur Rahman**

🔗 **[Visit ThinkBoard](https://thinkboard-4krh.onrender.com/)** | ⭐ **[GitHub Repository](https://github.com/MinazurRahman/ThinkBoard)**

⭐ If you find this project helpful, please consider giving it a star!

</div>
