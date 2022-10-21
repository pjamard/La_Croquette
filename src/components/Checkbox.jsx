import React from 'react';

function Checkbox(props) {
  const { value, handleChange, checked} = props;
  return (
    <div>
      <label for='content'>
        <input type='checkbox' value={value} onChange={handleChange} checked={checked}/> {value}
      </label>
    </div>
  );
}

export default Checkbox;
