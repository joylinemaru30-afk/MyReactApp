
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Eigthcomponent from './components/Eigthcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Firstcomponent from './components/Firstcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Secondcomponent from './components/Secondcomponent';
import Seventhcomponent from './components/Seventhcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Ninecomponent from './components/Ninecomponent';
import Notfound from './components/Notfound';

function App() {
  return (
    <Router>
          <div className="App">
      <header className="App-header">
        
        <h1>My First React App</h1>
        
        
      </header>
      <Link to={'/fifth'}className='links'>Fifth</Link>
      <Link to={'/fourth'}className='links'>Fourth</Link>
      <Link to={'/third'}className='links'>Third</Link>
      <Link to={'/second'}className='links'>Second</Link>
      <Link to={'/first'}className='links'>First</Link>
      <Link to={'/seventh'}className='links'>Seventh</Link>
      <Link to={'/eigth'}className='links'>Eigth</Link>
      <Link to={'/nine'}className='links'>Nine</Link>
      <Link to={'/*'}className='links'>Notfound</Link>
      <Link to={'/sixth'}className='links'>sixth</Link>
      <Routes>
        <Route path='/' element={<Firstcomponent/>}/>
        <Route path='/second' element={<Secondcomponent/>}/>
        <Route path='/third' element ={<Thirdcomponent/>}/>
        <Route path='/fourth' element={<Fourthcomponent/>}/>
        <Route path='/fifth'   element={<Fifthcomponent/>}/>
        <Route path='/sixth'   element={<Sixthcomponent/>}/>
        <Route path= '/seventh' element={<Seventhcomponent/>}/>
        <Route path='/eigth' element={<Eigthcomponent/>}/>
        <Route path='/nine' element={<Ninecomponent/>}/>
        <Route path='/*'element={<Notfound/>}/>
      </Routes>

      
    </div>
    </Router>

  );
}

export default App;
