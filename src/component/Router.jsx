import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Home from './index'
import Question from './question/Question';
import NewQuestion from "./question/NewQuestion";

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

const Login = () => (
  <h1>Login Page</h1>
);

const SignUp = () => (
  <h1>Sign Up Page</h1>
);

export default Pages;