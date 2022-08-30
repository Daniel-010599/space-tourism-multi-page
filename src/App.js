import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [background,setBackground] = useState('section-home');

  function changeBackground(section){
    setBackground(section);
  }

  useEffect(()=>{
    const pathname = window.location.pathname;
    if(pathname==='/'){
      setBackground('section-home')
    }else if(pathname==='/destination'){
      setBackground('section-destination')
    }else if(pathname==='/crew'){
      setBackground('section-crew')
    }else{
      setBackground('section-technology')
    }
  },[])

  return (
   <div className={`App ${background}`}>
      <Router>
        <Header changeBackground={changeBackground}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/destination' element={<Destination/>}/>
          <Route path='/crew' element={<Crew/>}/>
          <Route path='/technology' element={<Technology/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
