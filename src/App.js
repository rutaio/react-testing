import './App.css';
import { Counter } from './components/Counter/Counter';
import { Button } from './components/Button/Button';

function App() {
  const handleClick = () => {
    alert('As Button.jsx buvau paspaustas!');
  };
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Button title={'Paspausk mane!'} onClick={handleClick} />
      </header>
    </div>
  );
}

export default App;
