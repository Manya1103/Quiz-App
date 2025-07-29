import React from 'react'
import { useContext, useEffect } from 'react'
import { QuizContext } from '../context/QuizContext'

const Quiz = () => {

  const {
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
  } = useContext(QuizContext);

useEffect(() =>{
  if(isTimeUp){
    handleNextQuestion();
  }
}, [isTimeUp, handleNextQuestion]);

if (!questions || questions.length === 0) {
  return <p className='text-center text-xl'>Loading...Please wait or try again later.</p>
 }
 if (isQuizCompleted) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-white">
      <h2>Quiz Finished</h2>
      <p>Your Score: {score}/{questions.length}</p>
      <button onClick={handleRestartQuiz} className='text-white py-3 px-8 rounded-lg bg-indigo-500 hover:bg-indigo-600 focus:outline-none transform duration-300 ease-in-out hover:scale-105'>
        Restart Quiz
      </button>
      <div className="mt-8 max-w-4xl w-full p-6 rounded-lg shadow-lg h-96 overflow-auto">
        <h3 className='text-2xl font-semibold mb-4'>Review Your Answer: </h3>
        <div className="space-y-6">
          {userAnswers.length > 0 && userAnswers.map((answer, index) => (
            <div key={index} className='p-4 rounded-lg border'>
              <p className='font-bold text-lg mb-2'>
                Q{index + 1}: {answer.question}
              </p>
              <p className='mb-2'>
                <span className='font-semibold text-green-500'>Correct Answer:</span>
                {answer.correctAnswer}
              </p>
              <p className='mb-2'>
                <span className='font-semibold text-red-500'>Your Answer:</span>
                {answer.selectedAnswer || "Not Answered"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}

  const { question, options } = questions[currentQuestionIndex] || {};
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 bg-gradient-to-l from-[#13072e] to-[#3f2182] text-white'>
      <div className="flex flex-row justify-between space-x-12 mb-6">
        <p className='text-lg font-bold'>Total Questions: {questions.length}</p>
        <p className='text-lg font-bold'>Current Question: {currentQuestionIndex + 1}</p>
      </div>
      <div className="p-8 rounded-xl shadow-lg max-w-3xl w-full bg-gradient-to-l from-[#13072e] to-[#3f2182] border">
        <button onClick={handleNextQuestion} className='border py-1 px-4 rounded-md mb-5 hover:bg-blue-500'>
          Next
        </button>
        <h2 className='text-3xl font-bold text-center mb-4'>{question}</h2>
        <p className='text-xl text-center mb-6'>
          Time Left: <span className='text-red-500 font-semibold'>{timer} seconds</span>
        </p>
        <div className="relative mb-6">
          <progress value={progress} max="100" className='w-full h-0.5 bg-gray-300 rounded-full mb-9'></progress>
            <span className='absolute top-0 left-0 right-0 text-center text-white font-semibold mt-3'>
              {Math.round(progress)}% completed
            </span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {options && options.map((option, index) => (
                <button onClick={() => handleSelectedAnswer(option)} key={index} className='text-white py-3 px-6 rounded-lg shadow-lg bg-indigo-500 transition ease in out duration-300 transform hover:scale-105 hover:bg-green-600'>
                  {option}
                </button>
              ))}

            </div>
      </div>
    </div>
  )
}

export default Quiz