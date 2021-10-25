import { useState } from 'react';
import { Greet } from '../Greet';

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>logout</button>
      <div>
        <Greet name="Akhil" isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
};
