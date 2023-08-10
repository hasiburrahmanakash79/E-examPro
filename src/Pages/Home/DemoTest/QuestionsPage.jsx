import React from 'react'

const QuestionsPage = ({
  question,
  selectedChoice,
  onAnswerSelected,
  isLastQuestion
}) => {
  return (
    <div className='w-1/2 mx-auto text-white md:p-6 md:pt-0'>
      <h2 className='pb-4 text-2xl'>{question.text}</h2>
      <ul>
        {question.choices.map(choice => (
          <li key={choice.id} className={` w-96 `}>
            <label
              className={`block cursor-pointer p-3 my-2 w-96 rounded-lg font-semibold hover:bg-slate-500 ${
                selectedChoice === choice.id
                  ? 'selected_ans py-4 outline-slate-300'
                  : ' hover:text-slate-900 hover:outline '
              }`}
            >
              <input
                className='px-6 sr-only'
                type='radio'
                name={`question_${question.id}`}
                value={choice.id}
                checked={selectedChoice === choice.id}
                onChange={() => onAnswerSelected(question.id, choice.id)}
                disabled={isLastQuestion}
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
