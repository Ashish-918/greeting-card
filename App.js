/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

/*import React from 'react';
import GreetingCard from './GreetingCard';

const App = () => {
  return (
    <div>
      <GreetingCard
        recipient="John"
        occasion="Birthday"
        message="May this day be filled with joy and laughter!"
      />
      <GreetingCard
        recipient="Sarah"
        occasion="Graduation"
        message="Congratulations on your great achievement!"
      />
    </div>
  );
};

export default App;
*/




import React from 'react';
import GreetingCard from './GreetingCard';

const App = () => {
  return (
    <div className="app">
      <GreetingCard name="John" greeting="Hello" />
      <GreetingCard name="Jane" greeting="Hi" />
      <GreetingCard name="Bob" greeting="Welcome" />
    </div>
  );
};

export default App;

