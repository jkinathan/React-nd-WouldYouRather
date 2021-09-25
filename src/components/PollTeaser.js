import React, { Component, Fragment } from 'react';

import { Redirect } from 'react-router-dom';
import { Header, Button } from 'semantic-ui-react';


export class PollTeaser extends Component {

  state = {
    viewPoll: false
  };

  handleClick = e => {
    this.setState(prevState => ({
      viewPoll: !prevState.viewPoll
    }));
  };

  render() {
    const { question, unanswered } = this.props;
    
    if (this.state.viewPoll === true) {
      return <Redirect push to={`/questions/${question.id}`} />;
    }
    
    return (
      <Fragment>
        <Header as="h5" textAlign="left">
          Would you rather
        </Header>
        <p style={{ textAlign: 'center' }}>
          ...{question.optionOne.text}...
        </p>
        <Button
          inverted color={unanswered === true ? 'green' : 'blue'}
          size="tiny"
          fluid
          onClick={this.handleClick}
          content={'View Poll'}
        />
      </Fragment>
    );
  }
}

export default PollTeaser;