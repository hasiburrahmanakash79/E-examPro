import React, { useState } from 'react'
import ResultPage from './ResultPage'
import QuestionsPage from './QuestionsPage'
import ProgressBar from './ProgressBar'

const DemoTests = () => {
  // dummy question array
  const tempQuestions = [
    {
      id: 1,
      text: 'What is the capital of France?',
      choices: [
        { id: 'paris', text: 'Paris' },
        { id: 'london', text: 'London' },
        { id: 'berlin', text: 'Berlin' },
        { id: 'madrid', text: 'Madrid' }
      ],
      correctAnswer: 'paris'
    },
    {
      id: 2,
      text: "Which planet is known as the 'Red Planet'?",
      choices: [
        { id: 'venus', text: 'Venus' },
        { id: 'mars', text: 'Mars' },
        { id: 'jupiter', text: 'Jupiter' },
        { id: 'saturn', text: 'Saturn' }
      ],
      correctAnswer: 'mars'
    }
  ]
  const [questions, setQuestions] = useState(tempQuestions)
  const [userAnswers, setUserAnswers] = useState({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  // handling selected answer
  const handleSelectedAnswer = (questionId, selectedChoiceId) => {
    setUserAnswers(prevUserAnswers => ({
      ...prevUserAnswers,
      [questionId]: selectedChoiceId
    }))
    setCurrentQuestionIndex(prevIndex => prevIndex + 1)
  }
  // // btn for previous question
  // const handlePreviousQuestion = () => {
  //   if (currentQuestionIndex > 0) {
  //     setCurrentQuestionIndex(prevIndex => prevIndex - 1)
  //   }
  // }
  const handleSubmit = () => {
    setIsSubmitted(true)
  }
  const totalQuestions = questions.length
  const answeredQuestions = Object.keys(userAnswers).length
  if (isSubmitted) {
    return <ResultPage questions={questions} userAnswers={userAnswers} />
  }
  const currentQuestion = questions[currentQuestionIndex]
  // progressbar
  const currentProgress = (answeredQuestions / totalQuestions) * 100
  return (
    <section className='w-full h-[80vh] rounded-lg shadow-lg md:w-96 mx-auto mt-4 md:mt-20 md:space-y-8'>
      {currentQuestion && (
        <>
          <ProgressBar percent={currentProgress} />
          <QuestionsPage
            question={currentQuestion}
            selectedChoice={userAnswers[currentQuestion.id]}
            onAnswerSelected={handleSelectedAnswer}
          />
          {currentQuestionIndex > 0 && (
            <button
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
            >
              Previous Question
            </button>
          )}
          {currentQuestionIndex == totalQuestions - 1 ? (
            <button onClick={handleSubmit}>Submit</button>
          ) : (
            <button
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
            >
              Next Question
            </button>
          )}
        </>
      )}
    </section>
  )
}

export default DemoTests
