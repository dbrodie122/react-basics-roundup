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
  const [listItems, setListItems] = useState(data);

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
      <FormComponent />
      <ListComponent listItems={listItems} swapColor={swapColor} />
    </div>
  );
}

export default App;
