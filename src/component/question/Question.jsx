import React, {Component} from 'react';
import Logo from "../header/Logo";
import HeaderNav from "../header/HeaderNav";
import Vote from './Vote';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SaveBtn from "./SaveBtn";

class Question extends Component {

  constructor(props) {
    super(props);

    this.state = {
      questionId: props.match.params.id,
      text: '',
      question: {
        id: 55463131313112,
        ranks: {
          votes: 15,
          answers: 20,
          views: 30
        },
        content: {
          description: "My First Question",
          detail: "I am learning react. I am trying to create a navbar and have my tabs open components as new pages using browser router. (When I click the navitems nothing is happening) I have website_header.js as:",
          categories: [
            "Android",
            "Java",
            "Exception"
          ]
        },
        answers: [
          {
            id: 5464464654646,
            content: "You could do as oklas suggested, or replace uuyyyyy with dasdas and xxx:",
            votes: 25
          },
          {
            id: 424564654646,
            content: "You could do as oklas suggested, or replace uuyyyyy with dasdas and xxx:",
            votes: 2
          },
          {
            id: 5454774654646,
            content: "You could do as oklas suggested, or replace uuyyyyy with dasdas and xxx:",
            votes: 44
          },

        ]
      }
    };

    console.log(props.match.params.id);

    this.handleOnEditorChange = this.handleOnEditorChange.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
  }

  handleOnEditorChange(value) {
    this.setState({text: value});
  }

  handleOnSave(e) {
    e.preventDefault();

    console.log(e);
    console.log(this.state.text);
  }

  render() {

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

        <div className="Question-desc">
          <h2 >{this.state.question.content.description}</h2>
        </div>

        <section className="Question-item">
          <div className="Question-votes">
            <Vote votes={this.state.question.ranks.votes}/>
          </div>
          <div className="Question-detail">
            <p>{this.state.question.content.detail}</p>
          </div>
        </section>

        <section className="Answers">

          <div className="Question-desc Answer-desc">
            <h2 >Answers</h2>
          </div>

          <section className="Answer-item">
            <div className="Answer-votes">
              <Vote votes={this.state.question.answers[ 0 ].votes}/>
            </div>
            <div className="Answer-detail">
              DETAIL
            </div>
          </section>

          <section className="Answer-item">
            <div className="Answer-votes">
              <Vote votes={this.state.question.answers[ 1 ].votes}/>
            </div>
            <div className="Answer-detail">
              DETAIL
            </div>
          </section>

          <section className="Answer-item">
            <div className="Answer-votes">
              <Vote votes={this.state.question.answers[ 2 ].votes}/>
            </div>
            <div className="Answer-detail">
              DETAIL
            </div>
          </section>
        </section>

        <section className="Question-newAnswer">
          <h3 className="Question-desc Answer-desc">Your Answer</h3>
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
        </section>
        {/*Question ID: {this.state.questionId}*/}


      </article>
    );
  }

}

export default Question;
