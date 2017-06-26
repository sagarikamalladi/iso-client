import React from 'react';

const HeaderSearch = (props) => (
  <div className="Header-search">
    <form className="Header-search__form" onSubmit={props.onHandleSearch}>
      <input className="Header-search__field" name="search" id="search" type="text" placeholder="Search question..."
             required/>
      <span className="arrow">
          <input className="Header-search__button" type="submit" value="Search"/>
        </span>
    </form>
  </div>
);

export default HeaderSearch;