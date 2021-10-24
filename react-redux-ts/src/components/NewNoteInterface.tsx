import React from 'react';

const NewNoteInterface = () => {
  return (
    <form style={{ paddingLeft: '5px', paddingTop: '5px' }}>
      <input type="text" name="note" placeholder="new note"></input>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NewNoteInterface;
