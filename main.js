import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import StoryBox from './StoryBox.jsx';
import CommentBox from './CommentBox.jsx';


ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<StoryBox />, document.getElementById('story-box'));
ReactDOM.render(<CommentBox />, document.getElementById('comment-box'));
