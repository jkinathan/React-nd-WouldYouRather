import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {Header, Segment, Progress, Label } from 'semantic-ui-react';

const VoteTag = () => (
  <Label.Group color="orange" circular className="vote">
    <Label as='a' style={{ float: 'right' }}>Your Vote</Label>
  </Label.Group>
);

class PollResult extends Component {

  render() {
    const { question, user } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const votesTotal = optionOneVotes + optionTwoVotes;
    const userVote = user.answers[question.id];

   
    return (
      <Fragment>
        <Header as="h3">
          Results:
        </Header>
        <Segment style={{ backgroundColor: userVote === 'optionOne' ? 'lightblue' : 'lightgrey'}}>

          {userVote === 'optionOne' && <VoteTag />}

          <p style={{ fontWeight: 'bold' }}>{question.optionOne.text}</p>
          <Progress percent={((optionOneVotes / votesTotal) * 100).toFixed(2)} progress color={'green'}>
            {optionOneVotes} out of {votesTotal} votes
          </Progress>
        </Segment>

        <Segment style={{ backgroundColor: userVote === 'optionTwo' ? 'lightblue' : 'lightgrey' }}>
          {userVote === 'optionTwo' && <VoteTag />}

          <p style={{ fontWeight: 'bold' }}>{question.optionTwo.text}</p>
          <Progress percent={((optionTwoVotes / votesTotal) * 100).toFixed(2)} progress color={'green'}>
            {optionTwoVotes} out of {votesTotal} votes
          </Progress>
        </Segment>
        
      </Fragment>
    );
  }
}

function mapStateToProps({ users, authUser }) {
  const user = users[authUser];
  return {
    user:user
  };
}

export default withRouter(connect(mapStateToProps)(PollResult));