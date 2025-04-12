```yaml
# 🛍️ Category Management Dashboard (Full Stack MERN)

A full-stack e-commerce admin panel built with the MERN stack. It allows administrators to manage clothing categories by adding, viewing, and storing item counts and category images. The system includes user authentication using JWT, image uploads via multer, and a responsive React frontend.

This project is designed as a foundational full-stack application for e-commerce admin use cases, ideal for beginners and intermediate developers who want to learn how to integrate frontend, backend, and database layers with authentication and file handling.

---

## 📦 Tech Stack

- **Frontend**: React.js (Hooks + Functional Components)
- **Backend**: Node.js + Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **File Uploads**: Multer
- **Styling**: CSS

---

## 📁 Project Structure

category-dashboard/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── uploads/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── *.js
│   │   │   └── *.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
├── README.md

---

## ⚙️ Backend Setup

cd backend
npm install

### 🔐 Create `.env` in `backend/`

PORT=5000
MONGO_URI=mongodb://localhost:27017/categoryApp
JWT_SECRET=your_jwt_secret_here

### ▶️ Start Backend

node server.js

---

## 🌐 Frontend Setup

cd frontend
npm install
npm start

---

## 🔐 Auth Features

- Signup (/signup)
- Login (/)
- Token saved to localStorage
- Protected dashboard route

---

## 📦 Category Features

- List all categories in a grid layout
- Add new category (name, item count, image)
- Images uploaded to backend/uploads/

---

## 🧪 API Endpoints

| Method | Endpoint                 | Description            |
|--------|--------------------------|------------------------|
| POST   | /api/auth/signup         | Register user          |
| POST   | /api/auth/login          | Login user             |
| GET    | /api/categories          | Fetch all categories   |
| POST   | /api/categories          | Add a new category     |

> All /categories endpoints require Authorization: Bearer <token>

---

## 🖼️ Image Uploads

- Images are stored locally in backend/uploads/
- Accessed via http://localhost:5000/uploads/<filename>

---

## 🚀 Deployment Tips

- Deploy frontend to Vercel
  - Set root directory to frontend/
- Deploy backend to Render
  - Set root to backend/
  - Add environment variables in Render dashboard

---

## 🧠 Notes

- Use `npx create-react-app frontend --no-git` to avoid nested git issues
- Delete `.git` inside frontend/ if accidentally created

---
