import React from 'react'

const QuestionsPage = ({ question, selectedChoice, onAnswerSelected }) => {
  return (
    <div className=''>
      <h2>{question.text}</h2>
      <ul>
        {question.choices.map(choice => (
          <li key={choice.id} className='w-full hover:bg-blue-200'>
            <label
              className={`w-full px-6 ${
                selectedChoice === choice.id ? ' bg-blue-200 text-black' : ''
              }`}
            >
              <input
                className='w-full px-6 sr-only'
                type='radio'
                name={`question_${question.id}`}
                value={choice.id}
                checked={selectedChoice === choice.id}
                onChange={() => onAnswerSelected(question.id, choice.id)}
              />
              {choice.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionsPage
