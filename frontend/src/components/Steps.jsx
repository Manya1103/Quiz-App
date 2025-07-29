import React from 'react'
const stepsData = [
  {
    step: "Step 1",
    title: "Read the questions carefully",
  },
  {
    step: "Step 2",
    title: "Select the correct answer from the given options",
  },
  {
    step: "Step 3",
    title: "Submit your answer before the time runs out",
  },
  {
    step: "Step 4",
    title: "Repeat the same for all questions",
  }
];

const Steps = () => {
  return (
    <section className="text-white py-10 border-t border-gray-600 mb-5">
      <div className='container mx-auto px-4 w-full'>
        <h2 className='text-center text-3xl font-bold mb-12 underline'>
          How to Play
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {stepsData.map((step, index) => (
            <div key={index} className='bg-gradient-to-l from-[#13027e] to-[#3f2182] text-dark-green rounded-lg p-6 shadow-md flex flex-col items-center'>
              <div className='bg-white text-black border border-black rounded-full w-12 h-12 flex items-center justify-center mb-4 font-bold text-lg'>
                {index + 1}
              </div>
              <p className='text-white text-center text-xl'>
                {step.title}
              </p>
            </div>
          ))}

        </div>
      </div>

    </section>
  )
}

export default Steps
