import React, {useEffect, useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import './App.css';
import {Grid} from "@material-ui/core";
import HomeCards from './components/HomeCards.js'
import useStyles from "./components/Style.js"
import Header from "./components/Header.js"
import Footer from './components/Footer';
import wordsToNumbers from 'words-to-numbers'

const btnKey = 'bd428a5ffe6c64a5121631f1c1df87802e956eca572e1d8b807a3e2338fdd0dc/stage'

function App() {
  const classes = useStyles()
  const [info, setInfo] = useState([])
  const [activeCard, setActiveCard] = useState(-1)
  
  useEffect(()=>{
    
    alanBtn({
      key : btnKey,
      onCommand: ({command, data, number})=>{
          if(command === 'latestResults'){
              console.log(data)
              setInfo(data)
          }
          if(command === "goBack"){
            setInfo([])
          }
          if(command === "active"){
            setActiveCard((prevCard) => prevCard + 1)
          }
          if(command === "open"){
            console.log(number)
            const parsedNumbers = wordsToNumbers((number) , {fuzzy : true})
            
            parsedNumbers <= data.length ? window.open(data[parsedNumbers - 1].url, '_blank') : 
            alanBtn().playText("sorry, not available")
          }
      }
    })
  },[])
  return (
      <div>
        {info.length === 0 ? <Header/>: null}
      <Grid className={classes.container} container alignContent="center" alignItems="stretch">

        <HomeCards activeCard={activeCard} art={info}/>
      
      </Grid>
      <Footer/>
      </div>
  );
}

export default App;
