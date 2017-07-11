import React from 'react';
import QuestionRow from "../main/QuestionRow";


const QuestionList = (props) => (
  <article>
    <h2 className="Main-title">{props.title}</h2>
    <section>

      {
        props.questions.map((q, idx) => (

          <QuestionRow
            key={q.question.id}
            id={q.question.id}
            ranks={q.question.ranks}
            content={q.question.content}
            onClickRow={(props.onHandlerQuestionClick) ? props.onHandlerQuestionClick : null}
          />

        ))
      }

    </section>
  </article>
);

export default QuestionList;
