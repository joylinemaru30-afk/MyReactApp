
import './App.css';
import Eigthcomponent from './components/Eigthcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Firstcomponent from './components/Firstcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Secondcomponent from './components/Secondcomponent';
import Seventhcomponent from './components/Seventhcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import Thirdcomponent from './components/Thirdcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>My React App</h1>
        <p>This is a simple paragraph</p>
        
      </header>

      <Firstcomponent/>
      <Secondcomponent/>
      <Thirdcomponent/>
      <Fourthcomponent/>
      <Fifthcomponent/>
      <Sixthcomponent/>
      <Seventhcomponent/>
      <Eigthcomponent/>
    </div>
  );
}

export default App;
