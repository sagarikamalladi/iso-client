import React, {Component} from 'react';
import QuestionRow from './questionRow';

class MainComponent extends Component{

  constructor(props){
    super(props);

    this.onHandlerQuestionClick = this.onHandlerQuestionClick.bind(this);
  }

  onHandlerQuestionClick(e){
    e.preventDefault();

    //console.log(e.target);
    console.log(e.currentTarget.id);
  }

  render(){
    return(
      <main>
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
      </main>
    );
  }


}

export default MainComponent;