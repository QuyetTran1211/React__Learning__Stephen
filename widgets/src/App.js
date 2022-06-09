import React from 'react';
// import Accordion from './compponents/Accordion';
import Search from './compponents/Search';

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

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};
