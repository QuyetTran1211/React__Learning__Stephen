import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner.js';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  getPosition = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  };

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  componentDidMount() {
    console.log('My conponent was rendered to the screen');
    this.getPosition();
  }

  componentDidUpdate() {
    console.log('My component was just updated');
  }

  // React says we have to define render!!
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
