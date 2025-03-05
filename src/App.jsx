import './App.css';
import { Counter } from './components/Counter/Counter';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import { Dashboard } from './components/Dashboard/Dashboard';
import { List } from './components/List/List';
import { Login } from './components/Login/Login';

function App() {
  const handleClick = () => {
    alert('As Button.jsx buvau paspaustas!');
  };
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Button title={'Paspausk mane!'} onClick={handleClick} />
        <Input placeholder={'Irasyk savo emeil'} />
        <Dashboard />
        <List items={['paprika', 'baklazanas', 'poras']} />
        <Login/>
      </header>
    </div>
  );
}

export default App;
