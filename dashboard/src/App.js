import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BaseProvider } from './contexts/BaseContext'
import * as Pages from './pages'

function App() {
  return (
    <BrowserRouter>
      <BaseProvider>
        <Switch>
          <Route exact path='/main/home' component={Pages.Home} />
          <Route exact path='/main/rooms/:page/:search?' component={Pages.Contents} />
          <Route exact path='/main/room/:id/:search?' component={Pages.Chats} />
          <Route exact path='/' component={Pages.Login} />
          <Route exact path='/sign' component={Pages.Sign} />
        </Switch>
      </BaseProvider>

    </BrowserRouter>
  )
}

export default App
