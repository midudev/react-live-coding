import React, { Suspense } from "react";
import { Link, Route, Switch } from "wouter";

import Header from "components/Header";
import { Register, Login, SearchResults, Detail, ErrorPage } from 'pages'
import { UserContextProvider, GifsContextProvider } from "context";

import "./App.css";

const HomePage = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <UserContextProvider>
      <div css={{textAlign:"center"}}>
        <Suspense fallback={null}>
          <section className="App-content">
            <Header />
            <Link to="/">
              <figure className="App-logo">
                <img alt="Giffy logo" src="/logo.png" />
              </figure>
            </Link>
            <GifsContextProvider>
              <Switch>
                <Route component={HomePage} path="/" />
                <Route
                  component={SearchResults}
                  path="/search/:keyword/:rating?"
                />
                <Route component={Detail} path="/gif/:id" />
                <Route component={Login} path="/login" />
                <Route component={Register} path="/register" />
                <Route component={ErrorPage} path="/:rest*" />
              </Switch>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  );
}
