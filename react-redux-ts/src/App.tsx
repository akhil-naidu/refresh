import React from 'react';
import NewNoteInterface from './components/NewNoteInterface';

function App() {
  return (
    <React.Fragment>
      <NewNoteInterface />

      <ul>
        <li>Some Note</li>
      </ul>
    </React.Fragment>
  );
}

export default App;
