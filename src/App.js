
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux';
import Login from './components/login';
import Nav from './components/nav';
import Home from './components/home';
import UserCard from './components/UserCard';
import NewPoll from './components/NewPoll';
import Leaderboard from './components/Leaderboard';
import Page404 from './components/404';

class App extends Component {

  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { authUser } = this.props;
    return (
      <Router>
        <div className="App">
          {authUser === null ? (
            <Route
              render={() => (
                <Grid padded="vertically" columns={1} centered>
                  <Grid.Row>
                    <Grid.Column style={{ maxWidth: 550 }}>
                  <Login />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              )}
            />
          ) : (
            <Fragment>
              <Nav />
              <Grid padded="vertically" columns={1} centered>
                <Grid.Row>
                  <Grid.Column style={{ maxWidth: 550 }}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/questions/page404id" component={Page404} />
                    <Route path="/questions/:question_id" component={UserCard} />
                    <Route path="/add" component={NewPoll} />
                    <Route path="/leaderboard" component={Leaderboard} />
                    <Route component={Page404} />
                  </Switch>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}

export default connect(mapStateToProps,{ handleInitialData })(App);