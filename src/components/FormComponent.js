import React from 'react';

export default function FormComponent({ handleChange, inputValue }) {
  return (
    <form>
      <label>
        <input type='text' value={inputValue} onChange={handleChange} />
      </label>
      <button type='submit'>Click to Add</button>
    </form>
  );
}
