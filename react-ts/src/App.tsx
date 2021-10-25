import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

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
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
