import React from 'react';
import Accordion from './compponents/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'Reacti is a front end javascript framwork'
  },
  {
    title: 'Why use React',
    content: 'React is a favorite JS lubrary among engineers'
  },
  {
    title: 'How do you use react',
    content: 'You use React by creating compponents'
  }
];

export default () => {
  return (
    <h1>
      <Accordion items={items} />
    </h1>
  );
};
