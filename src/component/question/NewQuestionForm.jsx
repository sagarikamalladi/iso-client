import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';
import MessageBar from './MessageBar';
import ReactQuill from "react-quill";
import TagsInput from 'react-tagsinput';
import api from '../../api';
import 'react-quill/dist/quill.snow.css';
import 'react-tagsinput/react-tagsinput.css';

const CustomButton = () => <span className="octicon octicon-star"/>;

/*
 * Event handler to be attached using Quill toolbar module (see line 73)
 * https://quilljs.com/docs/modules/toolbar/
 */
function insertStar() {
  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, "★");
  this.quill.setSelection(cursorPosition + 1);
}

function states() {
  return [
    {abbr: 'javascript', name: 'JavaScript'},
    {abbr: 'c', name: 'C'},
    {abbr: 'c#', name: 'C#'},
    {abbr: 'node', name: 'Node.js'}
  ]
}

function autocompleteRenderInput({addTag, ...props}) {
  const handleOnChange = (e, {newValue, method}) => {
    if (method === 'enter') {
      e.preventDefault()
    } else {
      props.onChange(e)
    }
  }

  const inputValue = (props.value && props.value.trim().toLowerCase()) || ''
  const inputLength = inputValue.length

  let suggestions = states().filter((state) => {
    return state.name.toLowerCase().slice(0, inputLength) === inputValue
  })

  return (
    <Autosuggest
      ref={props.ref}
      suggestions={suggestions}
      shouldRenderSuggestions={(value) => value && value.trim().length > 0}
      getSuggestionValue={(suggestion) => suggestion.name}
      renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
      inputProps={{...props, onChange: handleOnChange}}
      onSuggestionSelected={(e, {suggestion}) => {
        addTag(suggestion.name)
      }}
      onSuggestionsClearRequested={() => {
      }}
      onSuggestionsFetchRequested={() => {
      }}
    />
  )
}


const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header">
      <option value="1"/>
      <option value="2"/>
      <option defaultValue=""/>
    </select>
    <button className="ql-bold"/>
    <button className="ql-italic"/>
    <select className="ql-color">
      <option value="red"/>
      <option value="green"/>
      <option value="blue"/>
      <option value="orange"/>
      <option value="violet"/>
      <option value="#d0d1d2"/>
      <option defaultValue=""/>
    </select>
    <button className="ql-insertStar">
      <CustomButton />
    </button>
  </div>
);


class NewQuestionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      text: '',
      categories: [],
      /*serverMsg: '',
      msgHidden: true,
      successMsg: false,
      errorMsg: false,*/
      questions: []
    };

    this.handleOnEditorChange = this.handleOnEditorChange.bind(this);
    /*this.handleOnSave = this.handleOnSave.bind(this);*/
    this.handleOnAddCategory = this.handleOnAddCategory.bind(this);
    this.handleOnTitleChange = this.handleOnTitleChange.bind(this);

  }

  handleOnEditorChange(html) {
    this.setState({text: html});
  }

  handleOnTitleChange(e) {
    //console.log(e.target.value);
    this.setState({
      title: e.target.value
    });
  }

  handleOnAddCategory(tags) {
    //e.preventDefault();

    this.setState({
      categories: tags
    });

  }

  /*showMessage(msg, msgHidden, showErrorMsg, showSuccessMessage) {
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
  }*/

  /*handleOnSave(e) {
    e.preventDefault();

    let _self = this;

    console.log(this.state);

    api.question.save({
        title: this.state.title,
        content: {
          text: this.state.text,
          categories: this.state.categories
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

          let lastQuestions = this.state.questions.slice();

          lastQuestions.push({
            question: {
              id: res.body.id,
              content: {
                title: _self.state.title,
                text: `${_self.state.text}`,
                categories: _self.state.categories
              },
            }
          });

          _self.showSuccessMessage(res.body.message);
          _self.setState({
            title: '',
            text: '',
            categories: [],
            questions: lastQuestions
          });

        } else {
          _self.showErrorMessage(res.body.err);
        }

        setTimeout(() => {
          _self.setState({
            msgHidden: true
          });
        }, 4000);

        console.log(res);
      }
    );
    console.log(this.state);
  }*/

  render() {


    return (

      <div className="Question-Title">

        <h3 className="Question-desc Answer-desc">Posting a new question</h3>

        <MessageBar
          msgHidden={this.props.msgHidden}
          successMsg={this.props.successMsg}
          errorMsg={this.props.errorMsg}
          serverMsg={this.props.serverMsg}
        />

        <form className="" name="question-form" onSubmit={this.props.handleOnSave}>

          <fieldset>
            <label className="label" htmlFor="question-title">Title:</label>
            <input className="Title__field"
                   name="question-title"
                   id="question-title"
                   value={this.state.title}
                   onChange={this.handleOnTitleChange}
                   type="text"
                   placeholder="Enter your question here ..."
                   required
            />
          </fieldset>

          <input type="hidden" name="text" id="text" value={this.state.text} />
          <input type="hidden" name="categories" id="categories" value={this.state.categories} />

          <section className="text-editor">
            <CustomToolbar />
            <ReactQuill value={this.state.text}
                        onChange={this.handleOnEditorChange}
                        placeholder="Write additional information for your question ..."
                        theme={'snow'}
                        modules={NewQuestionForm.modules}
                        formats={NewQuestionForm.formats}
            />
            <div
              key="editor"
              ref="editor"
              className="quill-contents"
            />
          </section>

          <section className="NewQuestion-footer">

            <div>
              <TagsInput
                renderInput={autocompleteRenderInput}
                value={this.state.categories}
                onChange={this.handleOnAddCategory}
                placeholder="Category"
              />
            </div>

            <div className="Answer-btn">
              <input className="Header-search__button" type="submit" value="Save"/>
            </div>

          </section>


        </form>
      </div>
    );

  }

}

NewQuestionForm.modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      "insertStar": insertStar,
    }
  }
};

NewQuestionForm.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'color',
];

export default NewQuestionForm;