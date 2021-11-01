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
import Register from './Components/Register/Register';
import Profile from './Components/UserProfile/Profile';
import ManageOrder from './Components/ManageOrder/ManageOrder';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Navber></Navber>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>


            <Route exact path='/home'>
              <Home></Home>
            </Route>
             

            <Route path='/addingservice'>
              <AddingService></AddingService>
            </Route>
              

            <Route path='/signin'>
              <Signin></Signin>
            </Route>
             

              
            <Route exact path='/home/:id'>
              <Register></Register>
            </Route>
             

            <Route path='/profile'>
              <Profile></Profile>
            </Route>
            <Route path='/manageorder'>
              <ManageOrder></ManageOrder>
              </Route>


             
             
              



            <Route path='*'>
              <NotFound></NotFound>
            </Route>



          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
