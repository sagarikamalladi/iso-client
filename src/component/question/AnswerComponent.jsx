import React from 'react';
import AnswerQuestion from "./AnswerQuestion";


const AnswerComponent = (props) => (

    <AnswerQuestion
      question={props.question}
      handleOnSaveAnswer={props.handleOnSaveAnswer}
      answersList={props.answersList}
    />

);

export default AnswerComponent;