import React from 'react';

const Categories = props => (
  <ul className="QuestionRow-Catetegories">
    {
      props.categories.map(category => (
        <li className="QuestionRow-Catetegories__item" key={Math.floor(Math.random()*1000)}>
          {category}
        </li>
      ))
    }
  </ul>

);

export default Categories;