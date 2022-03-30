import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import Result from './Components/Result/Result';
import Search from './Components/Search/Search';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/result' element={<Result/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
