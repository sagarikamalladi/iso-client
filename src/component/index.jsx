import React, {Component} from 'react';
import HeaderComponent from './header/Header'
import MainComponent from "./main/Main";

class App extends Component {

  constructor(...props) {
    super(...props);

    this.state = {
      questions: [
        {
          question: {
            id: 55463131313112,
            ranks: {
              votes: 10,
              answers: 20,
              views: 30
            },
            content: {
              description: "My First Question",
              categories: [
                "Android",
                "Java",
                "Exception"
              ]
            },
          }
        },
        {
          question: {
            id: 5546313879797,
            ranks: {
              votes: 10,
              answers: 20,
              views: 30
            },
            content: {
              description: "My Second Question",
              categories: [
                "Android",
                "Java",
                "Exception"
              ]
            },
          }
        },
        {
          question: {
            id: 5546313131148787,
            ranks: {
              votes: 10,
              answers: 20,
              views: 30
            },
            content: {
              description: "My Third Question",
              categories: [
                "Android",
                "Java",
                "Exception",
                "Android",
                "Java",
                "Exception",
                "Android",
                "Java",
                "Exception",
                "Android",
                "Java",
                "Exception"
              ]
            },
          }
        },

      ]
    };

    this.onHandlerSearch = this.onHandlerSearch.bind(this);
  }

  onHandlerSearch(e){
    e.preventDefault();
    let searchTxt = e.target.search.value;
    console.log(searchTxt);
  }

  render() {

    return (
      <div>
        <HeaderComponent onHandleSearch={this.onHandlerSearch} />
        <MainComponent questions={this.state.questions} />
      </div>
    );

  }


}

export default App;
