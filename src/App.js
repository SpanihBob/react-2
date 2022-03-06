import React from 'react';
import { useState } from 'react';

import './App.css';
import MyButton from './components/Button/MyButton';
import FavoriteAlbum from "./components/FavoriteAlbum";
import PersonalPage from './components/PersonalPage';
import PersonalPageApdate from './components/PersonalPageApdate';

function App() {
  const[state1, changeState1] = useState(true);
  const[state2, changeState2] = useState(true);
  const[state3, changeState3] = useState(true);
  
  const task1 = (e) =>{
    e.preventDefault();
    changeState1(false);
    changeState2(true);
    changeState3(true);
  }
  const task2 = (e) =>{
    e.preventDefault();
    changeState1(true);
    changeState2(false);
    changeState3(true);
  }
  const task3 = (e) =>{
    e.preventDefault();
    changeState1(true);
    changeState2(true);
    changeState3(false);
  }
  

  return (
    <div className="App">
      <form>
        <MyButton onClick={task1}>задание1</MyButton>
        <MyButton onClick={task2}>задание2</MyButton>
        <MyButton onClick={task3}>задание3</MyButton>
      </form>
      {state1===false &&
      <FavoriteAlbum title="My favorite album" /> }     
      {state2===false &&
        <PersonalPage title="My personal page" />}
      {state3===false &&
        <PersonalPageApdate title="My new personal page" />}
    </div>
  );
}

export default App;
