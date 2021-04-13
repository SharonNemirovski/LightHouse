import { BrowserRouter as Router, Switch, Route ,Redirect} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HOME from './Pages/Home/Home';
import MyPort from './Pages/MyPort/MyPort';
import MySwitch from './Pages/MySwitch/MySwitch';

export default function InOneHere() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/Home" exact component={HOME} />
          <Route path="/MyPort" exact component={MyPort} />
          <Route path="/MySwitch" exact component={MySwitch} />
          <Route path ="/" >
            <Redirect to = "Home"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
