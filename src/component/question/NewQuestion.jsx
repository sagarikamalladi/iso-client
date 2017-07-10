import React, {Component} from 'react';
import ReactQuill from "react-quill";
import Logo from "../header/Logo";
import HeaderNav from "../header/HeaderNav";
import SaveBtn from "./SaveBtn";
import 'react-quill/dist/quill.snow.css';
import NewCategory from "./NewCategory";
import Categories from "../main/Categories";
import uid from 'uid2';

class NewQuestion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      categories: []
    };

    this.handleOnEditorChange = this.handleOnEditorChange.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
    this.handleOnAddCategory = this.handleOnAddCategory.bind(this);
  }

  handleOnEditorChange(value) {
    this.setState({text: value});
  }

  handleOnAddCategory(e) {
    e.preventDefault();

    let updated = this.state.categories.slice();
    updated.push(e.target.category.value);
    e.target.category.value = '';

    this.setState({
      categories: updated
    });
  }

  handleOnSave(e) {
    e.preventDefault();

    console.log(this.state);
  }

  render() {

    const menuItems = [
      {
        page: '/',
        desc: 'Home'
      },
      {
        page: '/login',
        desc: 'Login'
      },
      {
        page: '/signup',
        desc: 'Sign Up'
      },
    ];

    return (
      <article className="Question">

        <header className="Header">
          <Logo />
          <HeaderNav menu={menuItems}/>
        </header>

        <section className="Question-newAnswer">
          <h3 className="Question-desc Answer-desc">Posting a new question</h3>
          <ReactQuill value={this.state.text}
                      onChange={this.handleOnEditorChange}
                      theme={'snow'}
                      modules={ReactQuill.modules}
                      formats={ReactQuill.formats}
          />
        </section>

        <section className="NewQuestion-footer">
          <SaveBtn
            handleOnSave={this.handleOnSave}
          />
          <NewCategory
            handleOnAddCategory={this.handleOnAddCategory}
          />
        </section>
        <section>
          <Categories
            categories={this.state.categories}
          />
        </section>

      </article>
    );
  }

}

export default NewQuestion;
