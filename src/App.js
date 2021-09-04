import Home from './Components/Home/Home';

import './App.css';
import 'aos/dist/aos.css'

import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import { useEffect } from 'react';
import Aos from 'aos' 


function App() {

  useEffect(() => {
    Aos.init({ 
      duration: 1000,
     })
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
