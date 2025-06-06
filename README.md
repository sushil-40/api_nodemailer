# 📬 NodeMailer Contact Form — Full Stack App (React + Express)

This project is a full-stack contact form that allows users to send message via a simple frontend form. It is built using **React** for the frontend and **Node.js + Express** for the backend, with **Nodemailer** handling the email functionality. It is deployed using **Vercel** (frontend) and **Render** (backend).

## 🧱 Tech Stack

- **Frontend**: React, Bootstrap
- **Backend**: Node.js, Express, Nodemailer, dotenv
- **Deployment**: Vercel (frontend), Render (backend)

## 🌐 Live Demo

- **Frontend**: https://your-frontend.vercel.app
- **Backend**: https://your-backend.onrender.com

## 🧾 Features

- Responsive form UI with Bootstrap
- Email + message form fields
- Uses Axios to send message to backend
- Backend uses Nodemailer to send the email
- Success message shown to user on completion
- Clean and mobile-friendly UI
- Backend hosted on Render, frontend on Vercel

## 📁 Project Structure

/project-root
│
├── /backend → Node.js + Express + Nodemailer
│ ├── routers/
│ ├── nodemailer.js
│ ├── server.js
│ ├── .env
│ └── package.json
│
├── /frontend → React.js frontend
│ ├── src/
│ ├── public/
│ └── package.json
│
└── README.md → This file

## 🚀 Setup Instructions

### 🔧 Backend Setup (/backend)

1. Navigate to the backend folder:
   cd backend
2. Install dependencies:
   npm install
3. Create a `.env` file in the /backend directory:
   PORT=8000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   TO_EMAIL=recipient@example.com
4. Start the backend locally:
   npm start
5. Your API should now be running at:
   http://localhost:8000

## 🌐 Backend Deployment (Render)

1. Push your code to GitHub.
2. Go to https://render.com and click "New Web Service".
3. Connect your GitHub repo.
4. In Render:
   - Build Command: npm install
   - Start Command: npm start
   - Add all your .env variables under "Environment → Environment Variables".
5. Render will assign you a public URL like:
   https://your-backend.onrender.com

### 💅 Frontend Setup (/frontend)

1. Navigate to the frontend folder:
   cd frontend
2. Install dependencies:
   npm install
3. Configure your backend API URL:
   In src/helpers/axiosHelper.js or wherever you're making the POST request:
   const API_URL = "https://your-backend.onrender.com/api/v1/message";
4. Start the frontend locally:
   npm start
5. Your app will be running at:
   http://localhost:8000

### 🚀 Frontend Deployment (Vercel)

1. Push your frontend to a GitHub repo.
2. Go to https://vercel.com and click "New Project".
3. Import your repo.
4. Vercel will auto-detect React.
5. Optionally configure the REACT_APP_API_URL as environment variable in Vercel.
6. It will deploy your app to a URL like:
   https://your-frontend.vercel.app

## 🧪 API Example

### POST /api/v1/message

Send email from frontend:
{
"subject": "Message from contact form",
"email": "user@example.com",
"message": "Hello, I’d like to connect."
}
Response:
{
"message": "Email sent successfully"
}

## 🧼 Styling Notes

- The form is responsive using Bootstrap classes.
- Dark mode is supported via body background color.
- Adjust spacing using utility classes like mt-5, w-50, text-center, etc.

## 🐞 Troubleshooting

- Bad Gateway on Render: Ensure you're using process.env.PORT in app.listen(PORT) and not hardcoded ports.
- Missing .env variables: Add them in both Render and Vercel environments.
- CORS errors: Ensure cors middleware is added to the backend (app.use(cors())).
- Email not sending: Check EMAIL_USER and EMAIL_PASS, and confirm you're using an App Password for Gmail.

## 📄 License

This project is built for learning and portfolio purposes. Feel free to use, fork, and adapt it as needed.

## 👨‍💻 Author

Built by Sushil Dangoriya
