import React from 'react';
import ReactDOM from 'react-dom';

class CommentForm extends React.Component{
  render(){
    return (
      <form className = "comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <lable>Join the discussion</lable>
        <div className = "comment-form-field">
          <input placeholder ="name:" ref={(input)=> this._author = input}/>
          <textarea placeholder="Comment:" ref={(textarea) =>this._body = textarea}></textarea>
        </div>
        <div className ="comment-form-actions">
          <button type="submit">
            Post Comment
          </button>

        </div>
      </form>
    );
  }
  _handleSubmit(event){
    event.preventDefault();
    let author = this._author ;
    let body = this._body;
    this.props.addComment(author.value , body.value );


  }


}

export default CommentForm;
