import React from 'react';
import Vote from './Vote';

const Answer = (props) => (
  <section className="Answer-item">
    <div className="Answer-votes">
      <Vote votes={props.answer.votes}/>
    </div>
    <div className="Answer-detail">
      {props.answer.text}
    </div>
  </section>
);

export default Answer;