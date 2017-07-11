import React from 'react';
import classNames from 'classnames';

const MessageBar = (props) => (
  <section className="Messages-bar">
    <div id="server-message" className={classNames({
      'Hidden': props.msgHidden,
      'SuccessMsg': props.successMsg,
      'ErrorMsg': props.errorMsg,
      'Message-box': true
    })}>{props.serverMsg}</div>
  </section>
);

export default MessageBar;
