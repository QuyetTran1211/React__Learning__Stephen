import React, { useState } from 'react';
// import Accordion from './compponents/Accordion';
// import Search from './compponents/Search';
import Dropdown from './compponents/Dropdown';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'Reacti is a front end javascript framwork'
//   },
//   {
//     title: 'Why use React',
//     content: 'React is a favorite JS lubrary among engineers'
//   },
//   {
//     title: 'How do you use react',
//     content: 'You use React by creating compponents'
//   }
// ];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
