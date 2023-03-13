import React from "react";
import {Provider} from 'react-redux';
import MainNavigation from "./src/navigation/rootNavigation";
import { store } from "./src/redux/Store";
import MyTabs from "./src/navigation/topTabNavigation";

const App = ()=>{
  return(
<Provider store ={store}>
  <MainNavigation/>
</Provider>
  )

}
export default App