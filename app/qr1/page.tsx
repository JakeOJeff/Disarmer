'use client'

import { useState } from 'react'

export default function Page() {
  const QUESTION = 'What is the heated surface called that prints stick to?'
  const CORRECT_ANSWER = 'bed'
  const REWARD_CODE = 'AX7Q' // can be a single letter like 'P'

  const [answer, setAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
    setIsCorrect(answer.trim().toLowerCase() === CORRECT_ANSWER.toLowerCase())
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-4">
        
        <h1 className="text-xl font-semibold text-gray-900">
          Printer Realm
        </h1>

        <p className="text-gray-700">
          {QUESTION}
        </p>

        {!isCorrect && (
          <>
            <input
              type="text"
              placeholder="Your answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-black text-white py-2 rounded-md hover:opacity-90 transition"
            >
              Submit
            </button>
          </>
        )}

        {isCorrect && (
          <div className="bg-green-100 border border-green-300 rounded-md p-4 text-center">
            <p className="text-green-800 font-medium">
              Correct! Your code is:
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <p className="text-2xl text-black font-bold tracking-widest">
            {REWARD_CODE}
              </p>
              <button
            onClick={() => navigator.clipboard.writeText(REWARD_CODE)}
            className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
            Copy
              </button>
            </div>
          </div>
        )}

        {submitted && !isCorrect && (
          <p className="text-red-600 text-sm">
            Incorrect answer. Try again.
          </p>
        )}

       
      </div>
    </main>
  )
}
