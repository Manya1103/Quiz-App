# Quiz App 🧠

A modern, interactive quiz application built with React, JavaScript and Express.js. Test your knowledge with timed questions and get instant feedback!

## 🔗 Live Demo
Check out the live demo: []

## 📸 Screenshots

![Screenshots](./readmeSS/Quiz-App-Screenshot-1.png)
![Screenshots](./readmeSS/Quiz-App-Screenshot-2.png)
![Screenshots](./readmeSS/Quiz-App-Screenshot-3.png)
![Screenshots](./readmeSS/Quiz-App-Screenshot-4.png)
![Screenshots](./readmeSS/Quiz-App-Screenshot-5.png)


## 🌟 Features

- **Interactive Quiz Interface**: Clean and user-friendly design
- **Timed Questions**: Each question has a 10-second timer
- **Real-time Scoring**: Track your progress as you answer
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Toast Notifications**: Get instant feedback on your answers
- **Question Navigation**: Navigate through questions with ease
- **Quiz Completion Summary**: View your final score and performance

## 🛠️ Tech Stack

### Frontend
- **JavaScript (ES6+)** - Modern JavaScript with ES modules
- **React 19** - Modern React with hooks and context API
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Icons** - Beautiful icons library
- **React Toastify** - Toast notifications

### Backend
- **JavaScript (ES6+)** - Server-side JavaScript with ES modules
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development tool for auto-restarting server
- **JSON** - Simple data storage for questions

## 📁 Project Structure

```
Quiz-App/
├── backend/
│   ├── node_modules/
|   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── questions.json
│   └── server.js
└── frontend/
|    ├── node_modules/
|    ├── public/
|    ├── src/
|    │   ├── assets/
|    │   │   ├── headerImage.png
|    │   │   ├── logo.png
|    │   │   └── quiz.png
|    │   ├── components/
|    │   │   ├── Footer.jsx
|    │   │   ├── Header.jsx
|    │   │   ├── Modal.jsx
|    │   │   ├── NavBar.jsx
|    │   │   └── steps.jsx
|    │   ├── context/
|    │   │   └── QuizContext.jsx
|    │   ├── pages/
|    │   │   ├── Landing.jsx
|    │   │   └── Quiz.jsx
|    │   ├── App.jsx
|    │   ├── index.css
|    │   └── main.jsx
|    ├── .gitignore
|    ├── eslint.config.js
|    ├── index.html
|    ├── package-lock.json
|    ├── package.json
|    ├── postcss.config.js
|    ├── README.md          
|    ├── tailwind.config.js
|    └── vite.config.js
└──.gitignore
└── README.md 
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Quiz-App
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   nodemon server.js
   ```
   Server runs on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

## 🎯 How to Use

1. **Landing Page**: Start on the welcome page with quiz introduction
2. **Take Quiz**: Navigate to the quiz section to begin
3. **Answer Questions**: Each question has multiple choice options
4. **Timer**: You have 10 seconds per question
5. **Scoring**: Get real-time feedback and scoring
6. **Results**: View your final score and performance summary

## 🔧 Available Scripts

### Frontend Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend Scripts
```bash
node server.js    # Start the Express server
nodemon server.js # Start server with auto-restart (development)
```

## 📊 API Endpoints

### GET `/api/questions`
- **Description**: Fetch all quiz questions
- **Response**: JSON array of questions with options and correct answers
- **Example Response**:
  ```json
  {
    "success": true,
    "questions": [
      {
        "id": 1,
        "question": "What does HTML stand for?",
        "options": ["HyperText Markup Language", "HighText Machine Language", "HyperText Markdown Language", "Home Tool Markup Language"],
        "answer": "HyperText Markup Language"
      }
    ]
  }
  ```

## 🎨 Customization

### Adding New Questions
Edit the `backend/questions.json` file to add or modify quiz questions:

```json
{
  "id": 1,
  "question": "Your question here?",
  "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
  "answer": "Correct answer"
}
```

### Styling
The app uses Tailwind CSS for styling. Modify the components in the `frontend/src/components/` directory to customize the appearance.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Quizzing! 🎉**

