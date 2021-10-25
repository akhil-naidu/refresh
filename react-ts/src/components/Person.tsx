// Object Prop Example
// type PersonProps = {
//   name: {
//     first: string;
//     last: string;
//   };
// };
// Shifting props to its own file
import { PersonProps } from '../types/Person.types';

export const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};
