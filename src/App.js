import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Users from './layouts/users'
import Main from './layouts/main'
import Login from './layouts/login'

const App = () => {
   return (
      <div className='container mt-5'>
         <NavBar />
         <Switch>
            <Route exact path='/'><Main /></Route>
            <Route path='/users/:userId?' ><Users /></Route>
            <Route path='/login' ><Login /></Route>
         </Switch>
      </div>
   )
}

export default App