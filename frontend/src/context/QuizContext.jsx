import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const QuizContext = createContext();

const QuizContextProvider = ({ children }) => {

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(10);
    const [isTimeUp, setIsTimeUp] = useState(false);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);

    const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

    // Function to fetch questions from the backend
    const fetchQuestions = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/questions`);
            if (data.success) {
                setQuestions(data.questions);
            }
        } catch (error) {
            toast.error(error.message || 'Failed to fetch questions');
        }
    };

    // Timer Logic
    useEffect(() => {
        let countdown;
        if (currentQuestionIndex < questions.length && !isTimeUp && !isQuizCompleted) {
            countdown = setInterval(() => {
                setTimer(prev => {
                    if (prev <= 1) {
                        clearInterval(countdown);
                        setIsTimeUp(true);    // move to the next question
                        setCurrentQuestionIndex(prev => prev + 1); //increment the current question
                        return 10;          // reset timer to 10 seconds
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(countdown);
    }, [currentQuestionIndex, isTimeUp, isQuizCompleted, questions.length]);

    // Function to handle the selected answer and update the score
    const handleSelectedAnswer = (selectedAnswer) => {
        const correctAnswer = questions[currentQuestionIndex].answer;
        //stores the user's answer
        setUserAnswers((prev) => [...prev, {
            question: questions[currentQuestionIndex].question,
            correctAnswer: correctAnswer,
            selectedAnswer: selectedAnswer,
        }
        ]);
        if (selectedAnswer === correctAnswer) {
            setScore((prev) => prev + 1);
          
        }
        setIsTimeUp(true);  //Trigger the timer to move to the next question after answering
    }

    // Function to move to the next question
    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsTimeUp(false);
            setTimer(10); // Reset timer for the next question
        } else {
            setIsQuizCompleted(true);
            
        }
    }

    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setTimer(10);
        setIsTimeUp(false);
        setIsQuizCompleted(false);
        setUserAnswers([]);        // Reset user answers
    }

    useEffect(() => {
        fetchQuestions();
    }, []);

    const contextValue = {
        questions,
        currentQuestionIndex,
        score,
        timer,
        isTimeUp,
        isQuizCompleted,
        userAnswers,
        handleSelectedAnswer,
        handleNextQuestion,
        handleRestartQuiz,
    };

    return (
        <QuizContext.Provider value={contextValue}>
            {children}
        </QuizContext.Provider>
    );
};

export default QuizContextProvider;
