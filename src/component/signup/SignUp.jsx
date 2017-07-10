import React, {Component} from 'react';
import Logo from "../header/Logo";
import HeaderNav from "../header/HeaderNav";
import SubmitBtn from "../login/SubmitBtn";


class SignUp extends Component {
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
      page: '/login',
      desc: 'Login'
    },
  ];

  return(

  <article className="Question">

    <header className="Header">
      <Logo/>
  <HeaderNav menu={menuItems}/>

    </header>
<h2 className="Main-title">Sign Up</h2>
    <section>
    <input className="Category__field"
           name="category"
           id="category"
           type="text"
           placeholder="First Name"
           required
    />
    </section>
    <section>
    <input className="Category__field"
           name="category"
           id="category"
           type="text"
           placeholder="Last Name"
           required
    />
    <input className="Category__field"
           name="category"
           id="category"
           type="text"
           placeholder="Phone Number"
           required
    />
    <input className="Category__field"
           name="category"
           id="category"
           type="text"
           placeholder="Email Id"
           required
    />
    <input className="Category__field"
           name="category"
           id="category"
           type="text"
           placeholder="User Name"
           required
    />
    </section>
    <section>
    <input className="Category__field"
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


export default SignUp;
