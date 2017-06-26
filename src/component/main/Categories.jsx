import React from 'react';
import uid from 'uid2';

const Categories = props => (
  <ul className="QuestionRow-Catetegories">
    {
      props.categories.map(category => (
        <li
          className="QuestionRow-Catetegories__item"
          key={uid(6)}
          id={uid(6)}
        >
          {category}
        </li>
      ))
    }
  </ul>

);

export default Categories;