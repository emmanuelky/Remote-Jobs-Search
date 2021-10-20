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
      <div className="bg-pink-50 h-100 w-100 pb-5  ">
        <MyNavBar />
        <Route path='/' component={Home} />
        <Switch>
          <Route exact path="/favourite" component={MyFavouriteJobs} />
          <Route exact path="/:id" component={CompanyDetail} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;