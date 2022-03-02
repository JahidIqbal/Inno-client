import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import TableData from './Components/TableData/TableData';
import Home from './Components/Home/Home';
import AddData from './Components/AddData/AddData';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/form">
            <AddData />
          </Route>
          <Route exact path="/table">
            <TableData />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
