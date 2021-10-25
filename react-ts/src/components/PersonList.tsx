import { Name } from '../types/Person.types';

type PersonListProps = {
  // List of objects in an array => {}[] and then fill a bit more according to the type
  // names: {
  //   first: string;
  //   last: string;
  // }[];
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h3 key={name.first}>
            {name.first} {name.last}
          </h3>
        );
      })}
    </div>
  );
};
