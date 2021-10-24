// Remember a component props is an object, so is the variable below
// Also, use types while building apps and interfaces while building libraries, also because of the latest updates there are hardly any differences these days.
type GreetProps = {
  name: string;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Welcome {props.name}! You have 10 unread Messages</h2>
    </div>
  );
};
