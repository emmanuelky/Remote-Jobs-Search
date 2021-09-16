import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import CompanyDetail from './components/CompanyDetail'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import MyFavouriteJobs from './components/MyFavouriteJobs';

function App() {
  return (
    <Router>
      <div className="">
        <MyNavBar />
        <Route path='/' exact component={Home} />
        <Switch>
          <Route exact path="/company-detail" component={CompanyDetail} />
          <Route exact path="/favourite" component={MyFavouriteJobs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;