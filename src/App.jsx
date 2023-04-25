import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Main from './Components/Main/Main';
import Menu from './Components/Menu';
import Teams from './Components/Teams/Teams';
import style from './Components/pages.module.css'
import Competition from './Components/Competition/Competition';
import Matches from './Components/Matches/Matches';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div className={style.mainBlock}>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/teams' element={<Teams/>}/>
            <Route path='/competition/:id' element={<Competition/>}/>
            <Route path='/teams/:id' element={<Matches/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
