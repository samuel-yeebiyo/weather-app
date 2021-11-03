import { useState } from 'react';
import axios from 'axios';

import './App.css';

import { useEffect } from 'react';
import {useMediaQuery} from 'react-responsive'

import MainScreen from './components/MainScreen'
import SideBar from './components/SideBar'
import Menu from './components/Menu'

function App() {

  const [option, setOption] = useState(0)
  const [saved, setSaved] = useState([]);
  const [current, setCurrent] = useState({
    "city_id": 735563,
    "city_name": "Kozáni",
    "state_code": "ESYE13",
    "country_code": "GR",
    "country_full": "Piraiós Nomós",
    "lat": 40.30069,
    "lon": 21.78896
  },);
  const [weather, setWeather] = useState({})

  useEffect(()=>{

    console.log("Current location weather fetched!");


  },[])


  const change = (choice)=>{
      setOption(choice);
  }

  const save = (city)=>{
    let exists = saved.some((item)=>{
      return item.city_id == city.city_id;
    })

    let filtered = []
    if(exists){
      filtered = saved.filter((item)=>{
        return item.city_id != city.city_id
      })
    }else{
      filtered = [...saved, city]
    }

    setSaved(filtered)
  }

  //Inclde some way to change the current view
  //Pass prop function to card through sidebar
  //On card click, call function to change state here that will be passed to main screen

  const currentWeather = (city) =>{
    setCurrent(city)
  }

  const isMobile = useMediaQuery({query: '(max-width: 760px'});

  useEffect(()=>{
    console.log(isMobile);
  })

  return (
    <div className="App">
      <div className="side">
        <Menu change={change}/>
        <SideBar option={option} save={save} favs={saved} setCurrent={currentWeather}/>
      </div>
      <MainScreen save={save} favs={saved} current={current}/>
    </div>
  );
}

export default App;
