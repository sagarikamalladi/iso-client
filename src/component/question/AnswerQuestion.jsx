import React, {Component} from 'react';
import AnswerList from "./AnswerList";
import ReactQuill from 'react-quill';
import SaveBtn from "./SaveBtn";
import Vote from './Vote';

import 'react-quill/dist/quill.snow.css';

class AnswerQuestion extends Component{

  constructor(props){
    super(props);

    this.state = {
      text: ''
    };

    this.handleOnEditorChange = this.handleOnEditorChange.bind(this);
  }

  handleOnEditorChange(value) {
    this.setState({text: value});
  }

  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps: ',nextProps);
  }

  componentWillUpdate(nextProps, nextState){
    console.log(nextProps);
    console.log(nextState);
  }

  render(){

    return (
      <div>
        <div className="Question-desc">
          <h2 >{this.props.question.content.title}</h2>
        </div>

        <section className="Question-item">
          <div className="Question-votes">
            <Vote votes={this.props.question.ranks.votes}/>
          </div>
          <div className="Question-detail">
            <p>{this.props.question.content.text}</p>
          </div>
        </section>

        <AnswerList
          answersList={this.props.answersList}
        />

        <section className="Question-newAnswer">
          <h3 className="Question-desc Answer-desc">Your Answer</h3>
          <ReactQuill value={this.state.text}
                      onChange={this.handleOnEditorChange}
                      theme={'snow'}
          />

        </section>

        <section className="NewQuestion-footer">
          <SaveBtn
            handleOnSave={this.props.handleOnSaveAnswer}
            text={this.state.text}
          />
        </section>
      </div>
    );
  }

}


export default AnswerQuestion;