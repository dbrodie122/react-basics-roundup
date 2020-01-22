import React from 'react';

export default function ListComponent() {
  const data = [
    {
      color: 'red',
      text: 'Zebra'
    },
    { color: 'green', text: 'Potatoes' },
    { color: 'red', text: 'Trees' },
    { color: 'green', text: 'Computers' }
  ];

  return (
    <ul>
      <li className='red'>
        Zebra <button>Change Color</button>
      </li>
      <li className='green'>
        Potatoes <button>Change Color</button>
      </li>
      <li className='red'>
        Trees <button>Change Color</button>
      </li>
      <li className='green'>
        Computers <button>Change Color</button>
      </li>
    </ul>
  );
}
