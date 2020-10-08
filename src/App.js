import React, {useEffect, useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import './App.css';
import {Grid} from "@material-ui/core";
import HomeCards from './components/HomeCards.js'
import useStyles from "./components/Style.js"
import Header from "./components/Header.js"
import Footer from './components/Footer';

const btnKey = 'bd428a5ffe6c64a5121631f1c1df87802e956eca572e1d8b807a3e2338fdd0dc/stage'

function App() {
  const classes = useStyles()
  const [info, setInfo] = useState([])
  
  useEffect(()=>{
    
    alanBtn({
      key : btnKey,
      onCommand: ({command, data})=>{
          if(command === 'latestResults'){
              console.log(data)
              setInfo(data)
          }
          if(command === "goBack"){
            setInfo([])
          }
      }
    })
  },[])
  return (
      <div>
        {info.length ===0 ? <Header/>: null}
      <Grid className={classes.container} container alignContent="center" alignItems="stretch">

        <HomeCards art={info}/>
      
      </Grid>
      <Footer/>
      </div>
  );
}

export default App;
