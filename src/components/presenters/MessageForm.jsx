import React from 'react';

const MessageForm = (props) => {
  return (
    <div>
      <input
        type="text"
        defaultValue={props.message}
        onChange={(e) => {
          props.onMessageChange(e.target.value);
        }}
        placeholder="Message"
      />
      <br />
      <input
        type="checkbox"
        defaultValue={props.reverse}
        onChange={(e) => {
          props.onReverseChange(e.target.checked);
        }}
      /> Reverse
    </div>
  )
}

export default MessageForm;
