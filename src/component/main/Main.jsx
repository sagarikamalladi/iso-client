import React, {Component} from 'react';
import QuestionRow from './QuestionRow';
import {Redirect} from 'react-router-dom';

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
            <article>
              <h2 className="Main-title">Recent Questions</h2>
              <section>

                {
                  this.props.questions.map((q, idx) => (

                    <QuestionRow
                      key={q.question.id}
                      id={q.question.id}
                      ranks={q.question.ranks}
                      content={q.question.content}
                      onClickRow={this.onHandlerQuestionClick}
                    />

                  ))
                }

              </section>
            </article>
          </main>)
    );
  }
}


export default MainComponent;