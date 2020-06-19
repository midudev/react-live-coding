import React, {Suspense} from 'react';
import './App.css'

import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import ErrorPage from './pages/ErrorPage'
import Pepito from './context/StaticContext'
import {GifsContextProvider} from './context/GifsContext'
import { Link, Route, Switch } from "wouter"

const HomePage = React.lazy(() => import('./pages/Home'))

export default function App() {
  return (
  <Pepito.Provider value={{name: 'midudev',
  suscribeteAlCanal: true}}>
      <div className="App">
        <Suspense fallback={null}>
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt='Giffy logo' src='/logo.png' />
            </figure>
          </Link>
          <GifsContextProvider>
            <Switch>
              <Route
                component={HomePage}
                path="/"
              />
              <Route
                component={SearchResults}
                path="/search/:keyword/:rating?"  />
              <Route
                component={Detail}
                path="/gif/:id"
              />
              <Route
                component={ErrorPage}
                path="/:rest*"
              />
            </Switch>
          </GifsContextProvider>
        </section>
        </Suspense>
      </div>
    </Pepito.Provider>
  )
}
