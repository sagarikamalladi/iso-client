import React from 'react';

const NewCategory = (props) => (

    <form className="Category__form" onSubmit={props.handleOnAddCategory}>

      <input className="Category__button" type="submit" value="Category"/>
      <input className="Category__field"
             name="category"
             id="category"
             type="text"
             placeholder="Enter category..."
             required
      />

    </form>

);

export default NewCategory;