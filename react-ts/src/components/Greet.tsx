// Remember a component props is an object, so is the variable below
// Also, use types while building apps and interfaces while building libraries, also because of the latest updates there are hardly any differences these days.
type GreetProps = {
  name: string; // Sting Prop Example
  messageCount?: number; // Number Prop Example // ? signifies optional prop
  isLoggedIn: boolean; // Boolean Prop Example
};

export const Greet = (props: GreetProps) => {
  // This says, if there is some message count value, use it or use zero as default value
  const { messageCount = 0 } = props; // Without this undefined as messageCount is possible
  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCount} unread Messages`
          : 'Welcome Guest'}
      </h1>
    </div>
  );
};
