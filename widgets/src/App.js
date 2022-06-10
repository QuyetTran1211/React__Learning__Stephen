import React, { useState } from 'react';
import Accordion from './compponents/Accordion';
import Search from './compponents/Search';
import Dropdown from './compponents/Dropdown';
import Translate from './compponents/Translate';
import Route from './compponents/Route';
import Header from './compponents/Header';

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

// const showAccordion = () => {
//   if (window.location.pathname === '/') {
//     return <Accordion items={items} />;
//   }
// };

// const showSearch = () => {
//   if (window.location.pathname === '/search') {
//     return <Search />;
//   }
// };

// const showDropdown = () => {
//   if (window.location.pathname === '/dropdown') {
//     return <Dropdown options={options} />;
//   }
// };

// const showTranslate = () => {
//   if (window.location.pathname === '/translate') {
//     return <Translate />;
//   }
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* {showAccordion()}
      {showSearch()}
      {showDropdown()}
      {showTranslate()} */}
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Choose Your Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
