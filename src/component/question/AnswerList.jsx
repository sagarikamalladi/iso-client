import React from 'react';
import Answer from './Answer';

const AnswerList = (props) => {

  if (props.answersList && props.answersList.length > 0) {
    return (
      <section className="Answers">
        <div className="Question-desc Answer-desc">
          <h2>Answers</h2>
        </div>
        {
          props.answersList.map((answer) => (
            <Answer
              key={answer.id}
              answer={answer}
            />
          ))
        }
      </section>
    )
  }else{
    return(<section className="Answers" />)
  }
};


export default AnswerList;