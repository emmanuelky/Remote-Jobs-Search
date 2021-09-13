import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="">
        <Home path='/' exact />
        <Switch>
          <Route exact path="/company-detail" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
