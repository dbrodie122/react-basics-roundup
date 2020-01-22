import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import ListComponent from './components/ListComponent';

const data = [
  {
    color: 'red',
    text: 'Zebra'
  },
  { color: 'green', text: 'Potatoes' },
  { color: 'red', text: 'Trees' },
  { color: 'green', text: 'Computers' }
];

function App() {
  const [listItems, setListItems] = useState(data); // [{}]
  const [inputValue, setInputValue] = useState(''); // ''

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  // I need to create an object that has as its text
  //, the value from the input
  // create this object on click
  // {color: 'red', text: 'whatever the input text is'};
  // add it to the listItems
  const swapColor = listItem => {
    if (listItem.color === 'red') {
      listItem.color = 'green';
    } else if (listItem.color === 'green') {
      listItem.color = 'red';
    }
    const newItems = [...listItems];
    setListItems(newItems);
  };
  return (
    <div>
      <h1>React Roundup App</h1>
      <FormComponent handleChange={handleChange} inputValue={inputValue} />
      <ListComponent listItems={listItems} swapColor={swapColor} />
    </div>
  );
}

export default App;
