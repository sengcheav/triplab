import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx';
import CommentForm from './CommentForm.jsx';
import jQuery from './node_modules/jquery';


  class CommentBox extends React.Component{

    constructor(){
      super();
      this.state ={
        showComments : false,
        comments:[]
      };
    }


    componentWillMount(){
      this._fetchComments() ;
    }

    _fetchComments(){
      /*
      jQuery.ajax({
        method: 'GET',
        url: 'https://safe-cove-54730.herokuapp.com/allpost',
        success: (comment s) => {
        //  const c ={ id:comments.postid, author: comments.commenter, body: comments.comment} ;
          this.setState({comments})
        }
      });
*/
        let params,urllink ;
        params = {
                  "q": "obama",
                  "count": "10",
                  "offset": "0",
                  "mkt": "en-nz",
                  "safeSearch": "Moderate",
          };
          urllink= "https://api.cognitive.microsoft.com/bing/v5.0/news/search?" + {params};
          jQuery.ajax({
             method:'GET',
             url: urllink,
             beforeSend: function (xhrObj) {
                 xhrObj.setRequestHeader("Content-Type", "application/json");
                 xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "8505b65dea944060b0385b5e5eacce70");
             },
             data:"{body}",
             success :(comments1)=>{
               console.log(comments1.value[1]);
               var cs =[];
               var array = comments1.value ;
               var i =0 ;


               for (i = 0 ; i<4;i++){
                 var obj = comments1.value[i];
                 var c = {
                   id : i ,
                   author: comments1.value[i].name,
                   body :"lol"
                 }

                 cs.push(c);
               }

               this.setState({comments: cs})
             }
         });




    }


    render(){
      const comments = this._getComments() ;
      let buttonText = 'Show Comments';
      let commentNodes ;
      if ( this.state.showComments){
        buttonText = 'Hide Comments';
        commentNodes = <div className= "commnet-list">{comments}</div>
      }
      return(
        <div className= "commnet-box">
          <CommentForm addComment ={this._addComment.bind(this)} />
          <h3> Comments</h3>
          <button onClick ={this._handleClick.bind(this)}>{buttonText}</button>
          <h4 className= "comment-count">{this._getCommentsTitle(comments.length)} </h4>
          {commentNodes}
        </div>
      );
    }


    componentDidMount(){
      console.log("500");
    //  setInterval( ()=> this._fetchComments(), 50000000000);
    this._timer = setInterval(
                  ()=>this._fetchComments(),
                  500000);

    }

    componentWillUnmount(){ // memory leak solving
      clearInterval(this._timer);
    }

    _getComments(){


      return this.state.comments.map((comment)=>{
        return (
          <Comment
            author={comment.author} body={comment.body} key= {comment.id}/>
        );
      });
    }

    _getCommentsTitle(commentCount){
      console.log(commentCount);
      if(commentCount === 0){
        return 'No comments yet';
      }else if (commentCount ===1 ){
        return '1 comment';
      }else  {
        return commentCount+ ' comments'  ;
      }
    }

    _handleClick(){
      this.setState({
        showComments: !this.state.showComments
      });
    }

    _addComment(author , body ){
       const comment = {
         id: this.state.comments.length +1,
         author,
         body
       };
       this.setState({comments: this.state.comments.concat([comment]) });
    }




  }

export default CommentBox;
