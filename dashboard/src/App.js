import React from 'react'
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import TestPage from './pages/test.js'
import pages from './pages'
function App(){
  pages();
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path ='/'>
          <TestPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App