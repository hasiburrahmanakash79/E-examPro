import React, { useState } from 'react'
import ResultPage from './ResultPage'
import QuestionsPage from './QuestionsPage'
import ProgressBar from './ProgressBar'
import './demoTest.css'

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
  // disabling next button if not clicked any ans
  const [isAnswered, setIsAnswered] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  // handling selected answer
  const handleSelectedAnswer = (questionId, selectedChoiceId) => {
    setUserAnswers(prevUserAnswers => ({
      ...prevUserAnswers,
      [questionId]: selectedChoiceId
    }))
    setCurrentQuestionIndex(prevIndex => prevIndex + 1)
    // setting the disabled button to enabled
    setIsAnswered(true)
  }
  const handleSubmit = () => {
    setIsSubmitted(true)
  }
  const totalQuestions = questions.length
  const answeredQuestions = Object.keys(userAnswers).length

  // sending data to result page
  if (isSubmitted) {
    return <ResultPage questions={questions} userAnswers={userAnswers} />
  }
  const currentQuestion = questions[currentQuestionIndex]
  // last question
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1
  const hasUserSelectedLastQuestion =
    isLastQuestion && userAnswers[currentQuestion.id]

  // progressbar
  const currentProgress = (answeredQuestions / totalQuestions) * 100

  return (
    <section className='relative w-full h-[80vh] rounded-lg shadow-lg md:w-3/5 mx-auto mt-4 md:mt-10 md:space-y-8 question_card' >
      {currentQuestion && (
        <>
          <ProgressBar percent={currentProgress} />
          <QuestionsPage
            question={currentQuestion}
            selectedChoice={userAnswers[currentQuestion.id]}
            onAnswerSelected={handleSelectedAnswer}
            isLastQuestion={isLastQuestion}
          />
          <div className='relative flex justify-between w-11/12 mx-auto '>
            {currentQuestionIndex > 0 && (
              <button
                className='btn_quiz navigation-bar'
                onClick={() =>
                  setCurrentQuestionIndex(currentQuestionIndex - 1)
                }
              >
                Previous Question
              </button>
            )}
            {currentQuestionIndex == totalQuestions - 1 ? (
              <button
                className='btn_quiz navigation-bar'
                onClick={handleSubmit}
                disabled={!hasUserSelectedLastQuestion}
              >
                Submit
              </button>
            ) : (
              <button
                className='absolute right-0 navigation-bar btn_quiz'
                disabled={
                  !isAnswered || currentQuestionIndex === totalQuestions - 1
                }
                onClick={() => {
                  setCurrentQuestionIndex(currentQuestionIndex + 1)
                  // TODO:issue::when going back and forth between two questions after answering them, i seem to lose the logic of disabling and enabling the next btn
                  // setIsAnswered()
                }}
              >
                Next Question
              </button>
            )}
          </div>
        </>
      )}
    </section>
  )
}

export default DemoTests
