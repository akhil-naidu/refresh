import { useState } from 'react';
import { Greet } from '../Greet';

type AuthUserName = {
  name: string | undefined | null;
  email: string;
};

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<AuthUserName | null>(null); // This is highly useful if the AuthUserName is an object that consists both name and email
  const [messageCount, setMessageCount] = useState(0);

  const handleLogIn = () => {
    setUser({
      name: 'Akhil',
      email: 'akhil.naidu@edumatica.io',
    });
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const handleMessageCount = () => {
    isLoggedIn
      ? setMessageCount(messageCount + 1)
      : setMessageCount(messageCount);
  };

  const getEmail = () => {
    isLoggedIn && alert(user?.email); // ALways have to check using chaining (?)
  };

  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>logout</button>
      {isLoggedIn && <button onClick={handleMessageCount}>+</button>}
      {isLoggedIn && <button onClick={getEmail}>show email</button>}
      <div>
        <Greet
          name={user?.name}
          isLoggedIn={isLoggedIn}
          messageCount={messageCount}
        />
      </div>
    </div>
  );
};
