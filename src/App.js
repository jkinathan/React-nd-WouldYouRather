
import './App.css';
import React, {Component,Fragment} from 'react';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
// import Nav from './components/nav';
import Login from './components/login';


class App extends Component {

  componentDidMount() {
    this.props.handleInitialData();
  }


  render() {
    const { authedUser } = this.props
    return (
      <Router>
        <div className="App">
          {authedUser === null ? (
              <Route
                render={() => (
                  <ContentGrid>
                    <Login />
                  </ContentGrid>
                )}
              />
            ) : (
              <Fragment>
                {/* <Nav /> */}
                <ContentGrid>
                  <Route exact path="/" component={Home} />
                </ContentGrid>
              </Fragment>
            )}
          
        </div>
      </Router>
    );
  }
  
}
const ContentGrid = ({ children }) => (
  <Grid padded="vertically" columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 550 }}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps, { handleInitialData })(App);
