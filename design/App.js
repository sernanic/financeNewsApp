import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import HomeScreen from './Screens/HomeScreen';
const initialState = {
  action:'openMenu'

}

const reducer = (state =initialState) =>{
  return state;
}

const store = createStore(reducer);
const App=()=> {
  return(
    <Provider store={store}>
      <HomeScreen/>
    </Provider>

  )
  
}

export default App;

