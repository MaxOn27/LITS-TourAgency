import React from "react";
import Home from "./Components/Home/Home";
import LogIn from "./Components/Auth/LogIn";
import HomeCountryDetails from "./Components/Home/CountryDetails";
import AboutUs from "./Components/AboutUs/Company";
import AuthButton from "./Components/Auth/AuthButton";
import PrivateRoute from "./Components/Auth/Private";
import Registration from "./Components/Registration/Forms";
import { homeContent } from "./Components/Data/Data"
import ErrorPage from "./Components/Error/Error"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <span className="agencyName">Adrenaline<img className="logoPhoto" src={homeContent.logoPhoto} alt="..."/>Agency</span>
            <span>
              <NavLink
                exact
                className="home"
                to="/"
                activeStyle={{
                  color: "rgb(78, 109, 247)",
                  border: " 1px solid rgb(78, 109, 247)"
                }}
              >
                Home
              </NavLink>
            </span>
            <span>
              <NavLink
                exact
                className="about-us"
                to="/aboutUs"
                activeStyle={{
                  color: "rgb(95, 78, 247)",
                  border: " 1px solid rgb(95, 78, 247)"
                }}
              >
                About us
              </NavLink>
            </span>
            {/* <span>
              <Link class="login" to="/logIn">
                Log in
              </Link>
            </span> */}
            <span>
              <AuthButton className="Auth" />
            </span>
          </ul>
        </nav>

        <Switch>
          <PrivateRoute path="/AboutUs">
            <AboutUs />
          </PrivateRoute>
          <Route path="/Login">
            <LogIn />
          </Route>
          <PrivateRoute exact path="/registration">
            <Registration />
          </PrivateRoute>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path="/Countries/:countryId">
            <HomeCountryDetails />
          </PrivateRoute>
          <Route>
            <ErrorPage/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}
