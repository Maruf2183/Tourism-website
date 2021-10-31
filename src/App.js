import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Navber from './Components/Navber/Navber';
import Home from './Components/Home/Home';
import AddingService from './Components/Admin/AddingService';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './ContexAPI/AuthProvider';
import Signin from './Components/Signin/Signin';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>


            <Route exact path='/'>
              <Navber></Navber>
              <Home></Home>
              <Footer></Footer>
            </Route>


            <Route exact path='/home'>
              <Navber></Navber>
              <Home></Home>
              <Footer></Footer>
            </Route>



            <Route path='/addingservice'>
              <Navber></Navber>
              <AddingService></AddingService>
              <Footer></Footer>
            </Route>

            <Route path='/signin'>
             <Navber></Navber>
              <Signin></Signin>
            </Route>




            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
