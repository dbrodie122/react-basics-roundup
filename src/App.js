import React from 'react';

function App() {
  return (
    <div>
      <h1>React Roundup App</h1>
      <form>
        <label>
          <input type='text' />
        </label>
        <button type='submit'>Click to Add</button>
      </form>
      <ul>
        <li class='red'>
          Zebras <button>Change Color</button>
        </li>
        <li class='green'>
          Potatoes <button>Change Color</button>
        </li>
        <li class='red'>
          Trees <button>Change Color</button>
        </li>
        <li class='green'>
          Computers <button>Change Color</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
