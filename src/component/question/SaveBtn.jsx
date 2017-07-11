import React from 'react';

const SaveBtn = (props) => (
  <div className="Answer-btn">
    <form className="Header-search__form" onSubmit={props.handleOnSave}>
          <input type="hidden" name="text" value={props.text} />
          <input className="Header-search__button" type="submit" value="Save"/>
    </form>
  </div>
);

export default SaveBtn;