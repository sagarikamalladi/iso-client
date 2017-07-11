import React from 'react';
import PropTypes from 'prop-types';

const NewCategory = (props) => (

  <form className="Category__form" onSubmit={props.handleOnAddCategory}>

    <input className="Category__button" type="submit" value="Add Category"/>
    <input className="Category__field"
           name="category"
           id="category"
           type="text"
           placeholder="Enter category..."
           required
    />

  </form>

);

NewCategory.propTypes = {
  handleOnAddCategory: PropTypes.func.isRequired,
};

export default NewCategory;