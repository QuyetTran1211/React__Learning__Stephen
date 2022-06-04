import React from "react";
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Hi there</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

