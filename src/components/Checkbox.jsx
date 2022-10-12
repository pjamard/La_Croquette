import React from 'react';

function Checkbox(props) {
  const { value, handleChange} = props;
  return (
    <div>
      <label for='content'>
        <input type='checkbox' value={value} onChange={handleChange}/> {value}
      </label>
    </div>
  );
}

export default Checkbox;
