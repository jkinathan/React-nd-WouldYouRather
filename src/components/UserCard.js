import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Segment, Header, Grid, Image } from 'semantic-ui-react';

import PollQuestion from './PollQuestion';
import PollResult from './PollResult';
import PollSample from './PollSample';


const PollData = (props) => {
  const { pollType, question, unanswered } = props;

  switch (pollType) {

    case 'POLL_SAMPLE':
      return <PollSample question={question} unanswered={unanswered} />;

    case 'POLL_QUESTION':
      return <PollQuestion question={question} />;

    case 'POLL_RESULT':
      return <PollResult question={question} />;

    default:
      return;
  }
};

class UserCard extends Component {
  
  render() {
    const { author, question, pollType, unanswered = null, page404id } = this.props;
    
    if(page404id === true){
      return <Redirect to="/questions/page404id"/>;
    }

    else{
      return (
        <Segment.Group>
          <Header as="h5" textAlign="left" block attached="top" >
          
          {author.name} asks:
          </Header>
  
          <Grid divided padded>
            <Grid.Row>
              <Grid.Column width={5}>
                <Image src={author.avatarURL} />
              </Grid.Column>
              <Grid.Column width={11}>
                
                <PollData pollType={pollType} question={question} unanswered={unanswered}/>
  
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment.Group>
      );
    }
    
  }
}

function mapStateToProps(
  { users, questions, authUser },
  { match, question_id }
) 
{
  let question, pollType, author, page404id = false;

  
  if (question_id !== undefined) 
  {
    question = questions[question_id];
    author = users[question.author];
    pollType = 'POLL_SAMPLE';
  } 
  else 
  {
    const { question_id } = match.params;

    question = questions[question_id];

    const user = users[authUser];
    

    if(question === undefined)
    {
      console.log("--------------Helloo------------")
      console.log("My question is ",question)
      console.log("And my user is: ",user)
      page404id = true;
    }
    else
    {
      author = users[question.author];
      pollType = 'POLL_QUESTION';

      if(Object.keys(user.answers).includes(question.id)){
        pollType = 'POLL_RESULT';
      }
    }
  }

  return {
    page404id:page404id,
    question:question,
    author:author,
    pollType:pollType
  };
}

export default connect(mapStateToProps)(UserCard);