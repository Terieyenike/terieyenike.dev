import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GlobalStyle from './GlobalStyle';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Error from './components/Error/Error';
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' component={Projects} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
