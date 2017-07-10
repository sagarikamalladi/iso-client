import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Home from './index'
import Question from './question/Question';
import NewQuestion from "./question/NewQuestion";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";

const Pages = () => (

  <BrowserRouter >
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/question/:id" component={Question}/>
        <Route exact path="/newQuestion" component={NewQuestion}/>
      </Switch>
    </div>
  </BrowserRouter>

);





export default Pages;
