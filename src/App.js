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
  const [current, setCurrent] = useState({});
  const [now, setNow] = useState({
    data:[{
      weather:{}
    }]
  })
  const [weather, setWeather] = useState({
    data: [
      {weather: {}},
      {weather: {}},
      {weather: {}},
      {weather: {}},
      {weather: {}},
      {weather: {}},
    ]
  })

  useEffect(()=>{

    navigator.geolocation.getCurrentPosition((position)=>{

      let lat = position.coords.latitude
      let lon = position.coords.longitude
      
      let options = {
        method: 'GET',
        url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
        params: {lat: `${lat}`, lon: `${lon}`},
        headers: {
          'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_API_KEY
        }
      };


      axios.request(options).then(async function (response) {
        let fetched = await response.data;
        console.log(fetched)
        setWeather(response.data);

        let sub_option = {
          method: 'POST',
          url: 'https://shrouded-escarpment-48686.herokuapp.com/search',
          data: {city: `${JSON.stringify(fetched)}`},
          headers:{
            'Content-Type':'application/json',
          }
        };

        axios.request(sub_option).then(function(response){

          console.log("Got city")
          setCurrent(response.data)
        })

      }).catch(function (error) {
        console.error(error);
      });

      options = {
        method: 'GET',
        url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
        params: {lat: `${lat}`, lon: `${lon}`},
        headers: {
          'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_API_KEY
        }
      };

      axios.request(options).then(function (response) {
        let fetched = response.data;
        console.log(fetched)
        setNow(response.data);

      }).catch(function (error) {
        console.error(error);
      });

      
    })


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

    let options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
      params: {lat: `${city.lat}`, lon: `${city.lon}`},
      headers: {
        'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data)
      setWeather(response.data);
    }).catch(function (error) {
      console.error(error);
    });

    options = {
      method: 'GET',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
      params: {lat: `${city.lat}`, lon: `${city.lon}`},
      headers: {
        'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY
      }
    };

    axios.request(options).then(function (response) {
      let fetched = response.data;
      console.log(fetched)
      setNow(response.data);

    }).catch(function (error) {
      console.error(error);
    });

  }

  const isMobile = useMediaQuery({query: '(max-width: 800px'});


  return (
    <div className="App">
      <div className="side">
        <Menu current={option} mobile={isMobile} change={change}/>
        <SideBar option={option} save={save} now={now} favs={saved} mobile={isMobile} setCurrent={currentWeather}/>
      </div>
      <MainScreen save={save} favs={saved} current={current} weather={weather} now={now}/>
    </div>
  );
}

export default App;
