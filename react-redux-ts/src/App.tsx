import React from 'react';
import NewNoteInterface from './components/NewNoteInput';

function App() {
  return (
    <React.Fragment>
      <NewNoteInterface addNote={alert} />

      <ul>
        <li>Some Note</li>
      </ul>
    </React.Fragment>
  );
}

export default App;
