import React from 'react';
import ReactDOM from 'react-dom';
class StoryBox extends React.Component {
   render() {
   const now = new Date();
   const topicList =['HTML', 'CSS' , 'JavaScript']
      return (
         <div>
            <p>Story Box</p>
            <p className="lead" >
              Current time {now.toTimeString() }
            </p>
            <ul>
              {topicList.map( topic => <li> {topic}</li>)}
            </ul>
         </div>
      );
   }
}

export default StoryBox;
