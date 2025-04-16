# Reflectify 🪞

Reflectify is a **personal journaling and reflection API** built with Node.js, Express, and MongoDB.  
It allows users to create, view, update, and delete reflection entries — such as daily thoughts, moods, or gratitude notes — through a clean and structured RESTful API.

This project was built from scratch as part of a hands-on learning journey, with deep debugging and backend development practice. It will eventually be expanded with a custom frontend built in React.

---

## ✨ Features

- 📌 **Create** reflections with title, emoji, and description
- 📖 **Read** all reflections or fetch by ID
- 📝 **Update** existing entries
- 🗑️ **Delete** reflections when needed
- 📦 Fully structured backend with MVC pattern
- 🧠 Clear separation of concerns for maintainability
- 🌐 MongoDB Atlas integration for cloud-based storage

---

## 🛠 Tech Stack

| Technology | Purpose                            |
|------------|-------------------------------------|
| **Node.js** | Backend runtime                    |
| **Express.js** | API routing and middleware       |
| **MongoDB** + **Mongoose** | NoSQL database and schema modeling |
| **dotenv** | Environment variable management     |
| **CORS** | Cross-origin request handling         |
| **Nodemon** | Dev server with hot reloading      |

---

Getting Started
1. Clone the Repository
   git clone https://github.com/<your-username>/reflectify-backend.git
   cd reflectify-backend
2. Install Dependencies
   npm install
3. Create a .env File
   PORT=3001
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/reflectify?retryWrites=true&w=majority
4. Start the Server
   npm run dev

🚀 Coming Soon
	•	🌈 Frontend app using React.js
	•	🔐 User authentication (JWT-based)
	•	📊 Mood analytics & visualizations
	•	🎨 Tag-based filtering (e.g. “grateful”, “tired”, “focused”)
	•	☁️ Deployment to Render or Vercel

 
