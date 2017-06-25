import React from 'react';

const RankItem = (props) => (
  <div className="QuestionRow-rank__item">
    <div className="rank__item_val">{props.value}</div>
    <div className="rank__item_name">Votes</div>
  </div>
);

export default RankItem;