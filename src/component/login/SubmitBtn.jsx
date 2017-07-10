import React from 'react';

const SubmitBtn = (props) => (
  <div className="Answer-btn">
    <form className="Header-search__form" onSubmit={props.handleOnSave}>
          <input className="Header-search__button" type="submit" value="Submit"/>
    </form>
  </div>
);

export default SubmitBtn;
