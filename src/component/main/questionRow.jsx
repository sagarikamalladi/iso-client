import React from 'react';
import Categories from './Categories';
import Ranks from './Ranks';

const QuestionRow = (props) => (
  <article className="QuestionRow" onClick={props.onClickRow} key={props.id} id={props.id}>
    <Ranks
      ranks={props.ranks}
    />
    <section className="QuestionRow-desc">
      <h3>{props.content.description}</h3>
      <Categories categories={props.content.categories}/>
    </section>
  </article>
);

export default QuestionRow;