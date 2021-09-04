import Home from './Components/Home/Home';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          {/* <Route path="/" exact component={Home} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
