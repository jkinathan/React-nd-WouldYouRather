import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';
import UserCard from './UserCard';

class Home extends Component {

  render() {
    const { QuestionDetails } = this.props;

    return <Tab panes={panes({ QuestionDetails })} className="tab" />;
  }
}

const panes = props => {
  const { QuestionDetails } = props;
  return [
    {
      menuItem: 'Unanswered Questions',
      render: () => (
        <Tab.Pane>
          {QuestionDetails.unanswered.map(question => (
            <UserCard key={question.id} question_id={question.id} unanswered={true} />
          ))}
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Answered Questions',
      render: () => (
        <Tab.Pane>
          {QuestionDetails.answered.map(question => (
            <UserCard key={question.id} question_id={question.id} unanswered={false} />
          ))}
        </Tab.Pane>
      )
    }
  ];
};

function mapStateToProps({ authUser, users, questions }) {

  const answeredIds = Object.keys(users[authUser].answers);
  const answered = Object.values(questions).filter(question => answeredIds.includes(question.id)).sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions).filter(question => !answeredIds.includes(question.id)).sort((a, b) => b.timestamp - a.timestamp);

  return {
    QuestionDetails: {
      answered:answered,
      unanswered:unanswered
    }
  };
}

export default connect(mapStateToProps)(Home);