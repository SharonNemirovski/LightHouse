import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HOME from './Pages/Home/Home';
import NEP from './Pages/NEP/NEP';
import MyPort from './Pages/MyPort/MyPort';
import MySwitch from './Pages/MySwitch/MySwitch';

export default function InOneHere() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HOME} />
          <Route path="/NEP" exact component={NEP} />
          <Route path="/MyPort" exact component={MyPort} />
          <Route path="/MySwitch" exact component={MySwitch} />
        </Switch>
      </Router>
    </div>
  );
}
