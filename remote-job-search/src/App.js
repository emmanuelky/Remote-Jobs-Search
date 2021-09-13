import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import CompanyDetail from './components/CompanyDetail'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="">
        <Route path='/' exact component={Home} />
        <Switch>
          <Route exact path="/company-detail" component={CompanyDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
