import React, {Component} from 'react';
import Logo from "../header/Logo";
import HeaderNav from "../header/HeaderNav";
import api from '../../api';
import NewQuestionForm from './NewQuestionForm';
import AnswerComponent from "./AnswerComponent";


class NewQuestion extends Component {


  constructor(props) {
    super(props);


    this.state = {
      serverMsg: '',
      msgHidden: true,
      successMsg: false,
      errorMsg: false,
      question: {
        content: {
          title: 'Demo',
          text: 'Lorem ipsum and moer para lels'
        },
        ranks: {
          votes: 0,
        }
      },
      answers: []
    };

    this.handleOnSave = this.handleOnSave.bind(this);
    this.handleOnSaveAnswer = this.handleOnSaveAnswer.bind(this);

    /*this.handleOnEditorChange = this.handleOnEditorChange.bind(this);
     this.handleOnAddCategory = this.handleOnAddCategory.bind(this);
     this.handleOnTitleChange = this.handleOnTitleChange.bind(this);*/
  }


  showMessage(msg, msgHidden, showErrorMsg, showSuccessMessage) {
    this.setState({
      serverMsg: msg,
      msgHidden: msgHidden,
      errorMsg: showErrorMsg,
      successMsg: showSuccessMessage
    });
  }

  showSuccessMessage(msg) {
    this.showMessage(msg, false, false, true);
  }

  showErrorMessage(msg) {
    this.showMessage(msg, false, true, false);
  }

  handleOnSaveAnswer(e) {
    e.preventDefault();

    let form = e.target,
      text = form[ 'text' ].value;

    console.log(text);

    api.answer.save({
        questionId: this.state.question.id,
        text: text
      },
      (err, res) => {

        if (err) {
          console.log('Error on callback:', JSON.stringify(err));
          console.error(err);
          this.showErrorMessage(
            'Internal Error. Please, contact to the administrator.'
          );
          return;
        }

        if (res.statusCode === 201) {

          console.log(res.body);

          let lastAnswers = this.state.answers.slice();

          lastAnswers.push(res.body.answer);
          console.info(lastAnswers);
          this.setState({
            answers: lastAnswers
          });
          form[ 'text' ] = '';

        } else {
          this.showErrorMessage(res.body.err);
        }

      }
    );

  }

  handleOnSave(e) {
    e.preventDefault();

    console.log(e.target);

    let _self = this,
      form = e.target,
      title = form[ 'question-title' ].value,
      text = form[ 'text' ].value,
      categories = form[ 'categories' ].value;

    api.question.save({
        title: title,
        content: {
          text: text,
          categories: categories
        }
      },
      (err, res) => {

        if (err) {
          console.log('Error on callback:', JSON.stringify(err));
          console.error(err);
          _self.showErrorMessage(
            'Internal Error. Please, contact to the administrator.'
          );
          return;
        }

        if (res.statusCode === 201) {

          /*let lastQuestions = this.state.questions.slice();

           lastQuestions.push({

           });*/

          _self.showSuccessMessage(res.body.message);
          _self.setState({
            question: {
              id: res.body.id,
              content: {
                title: title,
                text: text,
                categories: categories
              },
              ranks: {
                votes: 0
              }
            }
          });

        } else {
          _self.showErrorMessage(res.body.err);
        }

        setTimeout(() => {
          _self.setState({
            msgHidden: true
          });
        }, 4000);

      }
    );

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
        page: '/',
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

          {
            (this.state.question && this.state.question.id)
              ?
              <AnswerComponent
                question={this.state.question}
                handleOnSaveAnswer={this.handleOnSaveAnswer}
                answersList={this.state.answers}
              />
              :
              <NewQuestionForm
                handleOnSave={this.handleOnSave}
                msgHidden={this.state.msgHidden}
                successMsg={this.state.successMsg}
                errorMsg={this.state.errorMsg}
                serverMsg={this.state.serverMsg}
              />
          }

        </section>


      </article>
    );
  }

}


export default NewQuestion;