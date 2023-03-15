import React,{useEffect,useState} from "react";
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
import { checkInternet } from "./src/redux/Action";
import MainNavigation from "./src/navigation/rootNavigation";
import { store } from "./src/redux/Store";
import { AppState} from "react-native";
import NetInfo from '@react-native-community/netinfo';
import { checkRooted } from "./src/helper/checkRooted/checkRooted";

const App = ()=>{
  useEffect(()=>{
    checkRooted()
  })
  const checkInternet=()=>{
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log(state.isConnected)
    });
    return () => {
      unsubscribe();
    };
  }
  return(
<Provider store ={store}>
  <MainNavigation/>
</Provider>
  )

}
export default App