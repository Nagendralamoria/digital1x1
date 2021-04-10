import React from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './Home';
import Header from './components/Header'
import Aboutus from './Aboutus';
import ContactUs from './ContactUs';
function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Home" exact component={Home}/>
      <Route path="/AboutUs" component={Aboutus}/>
      
      <Route path="/ContactUs" component={ContactUs}/>
      </Switch>
    </Router>
  );
}

export default App;
