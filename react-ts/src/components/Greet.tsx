// Remember a component props is an object, so is the variable below
// Also, use types while building apps and interfaces while building libraries, also because of the latest updates there are hardly any differences these days.
type GreetProps = {
  name: string; // Sting Prop Example
  messageCount: number; // Number Prop Example
  isLoggedIn: boolean; // Boolean Prop Example
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread Messages`
          : 'Welcome Guest'}
      </h1>
    </div>
  );
};
