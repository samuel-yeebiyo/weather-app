import { useState } from 'react';

import './App.css';

import { useEffect } from 'react';
import {useMediaQuery} from 'react-responsive'

import MainScreen from './components/MainScreen'
import SideBar from './components/SideBar'
import Menu from './components/Menu'

function App() {

  const [option, setOption] = useState(0)

  const change = (choice)=>{
      setOption(choice);
  }

  //Inclde some way to change the current view
  //Pass prop function to card through sidebar
  //On card click, call function to change state here that will be passed to main screen

  const isMobile = useMediaQuery({query: '(max-width: 760px'});

  useEffect(()=>{
    console.log(isMobile);
  })

  return (
    <div className="App">
      <div className="side">
        <Menu change={change}/>
        <SideBar option={option}/>
      </div>
      <MainScreen/>
    </div>
  );
}

export default App;
