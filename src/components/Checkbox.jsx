import React from 'react';

function Checkbox(props) {
  const { content, handleChange, active } = props;
  return (
    <div>
      <label for='content'>
        <input type='checkbox' value={content} onChange={handleChange} checked={active}/> {content}
      </label>
    </div>
  );
}

export default Checkbox;
