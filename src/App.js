import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Index from './components/index/index';
import Error from './components/error/Error'
import './App.css'

/**
 * Routes
 */

function App() {
  return (
    <BrowserRouter>

      <Switch>

        <Route path="/" 
            render={()=><Index/>} exact/>

        <Route path="/login" 
            render={()=> "Login"} exact/>

        <Route path="*" 
            render={()=> <Error/>} exact/>


      </Switch>

    </BrowserRouter>
  );
}



export default App;
