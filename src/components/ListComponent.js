import React from 'react';

export default function ListComponent({ listItems, swapColor }) {
  return (
    <ul>
      {listItems.map((item, i) => (
        <li className={item.color} key={i}>
          {item.text}
          <button onClick={() => swapColor(item)}>Change Color</button>
        </li>
      ))}
    </ul>
  );
}
