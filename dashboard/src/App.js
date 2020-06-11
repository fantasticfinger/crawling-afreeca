import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {BaseProvider} from './containers/commons/Base'
import * as Pages from './pages'
function App() {
  return (
    <BaseProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/main/home'>
            <Pages.Home />
          </Route>
          <Route exact path='/main/rooms/:page'>
            <Pages.Rooms />
          </Route>
          <Route exact path='/main/room/:id'>
            <Pages.Room />
          </Route>
          <Route exact path='/'>
            <Pages.Login />
          </Route>
          <Route exact path='/sign'>
            <Pages.Sign />
          </Route>
        </Switch>
      </BrowserRouter>
    </BaseProvider>
    
  )
}

export default App
