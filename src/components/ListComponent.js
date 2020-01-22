import React from 'react';

export default function ListComponent({ listItems }) {
  return (
    <ul>
      {listItems.map((item, i) => (
        <li className={item.color} key={i}>
          {item.text}
          <button>Change Color</button>
        </li>
      ))}
    </ul>
  );
}
