import React from 'react'

const Modal = ({ closeModal, startQuiz }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-[#0c0620] bg-opacity-90 z-50'>
      <div className='bg-gradient-to-r from-[#13072e] to-[#3f2182] p-6 sm:p-8 md:p-10 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-2xl mx-4'>
        <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center'>
          Quiz Instructions
        </h2>
        <ul className='list-decimal pl-4 sm:pl-6 text-sm sm:text-base md:text-lg space-y-2'>
          <li>Once you start, the quiz cannot be paused.</li>
          <li>You'll have a limited time to answer each question.</li>
          <li>A timer will be displayed for each question.</li>
          <li>Answer all questions to the best of your ability.</li>
          <li>After completing the quiz, your score will be displayed.</li>
          <li>Questions may vary in difficulty, so be prepared!</li>
          
        </ul>
        <p className='text-center mt-3 text-base md:text-lg font-semibold'>
          Good Luck and have fun! 🎉
        </p>
        <div className='mt-6 flex flex-col sm:flex-row justify-between gap-4'>
          <button onClick={closeModal} className='bg-gray-400 text-black py-2 px-6 rounded-full hover:bg-red-500 transition w-full sm:w-auto'>
            Cancel
          </button>
          <button onClick={startQuiz} className='bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-400 transition w-full sm:w-auto'>
            Are you Ready? Start Quiz
          </button>
        </div>
        <p className='text-xs mt-4 text-center'>
          <span className='underline'>
            Note: Time will start automatically when you click "Start Quiz".

          </span>
        </p>

      </div>

    </div>
  )
}

export default Modal