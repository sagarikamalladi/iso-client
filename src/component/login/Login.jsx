import React, {Component} from 'react';
import Logo from "../header/Logo";
import HeaderNav from "../header/HeaderNav";
import SubmitBtn from "./SubmitBtn";
class Login extends Component {
handleOnSave(e) {
  e.preventDefault();

  console.log(this.state);
}
  render(){
  const menuItems = [
    {
      page: '/',
      desc: 'Home'
    },
    {
    page: '/newQuestion',
    desc: 'New Question'
    },
    {
      page: '/signup',
      desc: 'Sign Up'
    },
  ];

  return(

  <article className="Question">

    <header className="Header">
      <Logo/>
  <HeaderNav menu={menuItems}/>

    </header>
<h2 className="Main-title">Login</h2>
    <section>

    <input className="Category__field"
           name="category"
           id="category"
           type="text"
           placeholder="User Name"
           required
    />
    <input type="password" className="Category__password"
           name="category"
           id="category"
           type="text"
           placeholder="Password"
           required
    />
    </section>
      <SubmitBtn
        handleOnSave={this.handleOnSave}
      />

</article>

  );

  }
}


export default Login;
