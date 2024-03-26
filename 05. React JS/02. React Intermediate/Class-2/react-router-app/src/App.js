
import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Support from './components/Support';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home Page</NavLink>
          </li>
          <li>
            <NavLink to='/support'>Support Page</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About Page</NavLink>
          </li>
          <li>
            <NavLink to='/labs'>Labs Page</NavLink>
          </li>
          <li>
            <NavLink to='*'>404 Page</NavLink>
          </li>
        </ul>
      </nav>



      <Routes>
        <Route path='/' element={<MainHeader/>} >
          <Route index  element={<Home />} />
          <Route path='/support' element={<Support/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/labs' element={<Labs/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
