import { useState } from 'react';

export const Input = () => {
  const [value, setValue] = useState('');
  // const handleOnChange = (event: string) => {
  //   console.log(event);
  //   setValue(event);
  // };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    setValue(event.target.value);
  };

  const handleOnClick = (value: string) => {
    alert(`Your Input Is: ${value}`);
  };
  return (
    <div>
      <input
        // onChange={(event) => handleOnChange(event.target.value)}
        onChange={(event) => handleOnChange(event)}
        type="text"
        value={value}
        placeholder="Enter Your String"
      />
      <button onClick={() => handleOnClick(value)}>Submit</button>
    </div>
  );
};
