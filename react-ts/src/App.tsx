import './App.css';
import { Greet } from './components/Greet';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { SubHeading } from './components/SubHeading';

function App() {
  const personName = {
    first: 'Naruto',
    last: 'Uzumaki',
  };

  // Array Prop Example
  const nameList = [
    {
      first: 'Naruto',
      last: 'Uzumaki',
    },
    {
      first: 'Hashirama',
      last: 'Senju',
    },
    {
      first: 'Madara',
      last: 'Uchiha',
    },
  ];

  return (
    <div className="App">
      <Greet name="Akhil" messageCount={20} isLoggedIn={false} />
      {/* Now I don't want to send the message count prop, we will introduce an optional prop (?) */}
      <Greet name="Akhil" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <hr />
      {/* Using string as a child*/}
      <SubHeading>This is a string as child Prop</SubHeading>{' '}
      {/* Using React Component as a child*/}
      <Oscar>
        <SubHeading>
          React component as Child Prop: Oscar goes to Leonardo Dicaprio!
        </SubHeading>
      </Oscar>
      {/* <Status status="loading" /> */}
      <Status status="success" />
    </div>
  );
}

export default App;
