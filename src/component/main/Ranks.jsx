import React from 'react';
import RankItem from './RankItem';

const Ranks = (props) => (
  <section className="QuestionRow-rank">
    <div className="QuestionRow-rank__item">
      <div className="rank__item_val">{props.ranks.votes}</div>
      <div className="rank__item_name">Votes</div>
    </div>
    <div className="QuestionRow-rank__item">
      <div className="rank__item_val">{props.ranks.answers}</div>
      <div className="rank__item_name">Answers</div>
    </div>
    <div className="QuestionRow-rank__item">
      <div className="rank__item_val">{props.ranks.views}</div>
      <div className="rank__item_name">Views</div>
    </div>
  </section>
);

export default Ranks;