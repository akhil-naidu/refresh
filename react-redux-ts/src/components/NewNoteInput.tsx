import React, { useState } from 'react';

interface NewNoteInputProps {
  addNote(note: string): void;
}

const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState('');

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    addNote(note);
    setNote('');
  };

  return (
    <form
      onSubmit={(e) => onSubmitHandler(e)}
      style={{ paddingLeft: '5px', paddingTop: '5px' }}
    >
      <input
        onChange={(e) => setNote(e.target.value)}
        type="text"
        value={note}
        name="note"
        placeholder="new note"
      ></input>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NewNoteInput;
