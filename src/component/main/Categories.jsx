import React from 'react';
import uid from 'uid2';
import PropTypes from 'prop-types';

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

Categories.propTypes = {
  categories: PropTypes.array
};

export default Categories;