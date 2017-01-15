import React from 'react'
import {Button, Image} from 'react-bootstrap'
var users = require('./users');

function WriteReport(props) {
  const questions = props.questions;
  const sharingPrefs = props.sharingPrefs;
  const listItems = questions.map((question) =>
    <li key={question.toString()}>
      {question+": "+ sharingPrefs[question].join(". ")+"."}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export class PublicProfile extends React.Component{
  render(){
    var user = this.props.params.user
    const sharingPrefs = users[user].sharingPreferences
    const questions = Object.keys(sharingPrefs);
    return(
      <div>      
        <Image src={users[user].picture}/>
        <p>
          {users[user].bio}
      </p>
        <h1>
          {user}
        </h1>
        You can use my DNA, but you must respect the following conditions: 
        <WriteReport sharingPrefs={sharingPrefs} questions={questions} />
        Data sources: 
        <Button href={users[user].dataSources["23andme"]}>Download</Button>
      </div>
    )
  }
}

export default PublicProfile
