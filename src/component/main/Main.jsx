import React, {Component} from 'react';
import QuestionRow from './QuestionRow';
import {Redirect} from 'react-router-dom';
import QuestionList from "../question/QuestionList";

class MainComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      redirectToComment: false,
      idComent: 0,
    };

    this.onHandlerQuestionClick = this.onHandlerQuestionClick.bind(this);
  }

  onHandlerQuestionClick(e) {
    e.preventDefault();

    //console.log(e.target);
    console.log(e.currentTarget.id);
    this.setState({
      redirectToComment: true,
      idComent: e.currentTarget.id
    });
  }

  render() {
    return (

      (this.state.redirectToComment && this.state.idComent !== 0)
        ? <Redirect to={`/question/${this.state.idComent}`} />
        : (<main className="Main">
            <QuestionList
              title="Recent Questions"
              questions={this.props.questions}
              onHandlerQuestionClick={this.onHandlerQuestionClick}
            />
          </main>)
    );
  }
}


export default MainComponent;