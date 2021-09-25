import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu,Image,Grid,Button,Container } from 'semantic-ui-react';
import { setAuthUser } from '../actions/authUser';

class Nav extends Component {
  handleLogout = e => {
    e.preventDefault();
    this.props.setAuthUser(null);
  };

  render() {
    const { authUser, users } = this.props;

    return (
      <Container>
          <Grid padded="vertically" columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Image src={users[authUser].avatarURL} avatar verticalAlign="bottom"/>
                {users[authUser].name}
                <Button
                  content="Logout"
                  labelPosition="right"
                  basic
                  compact
                  icon="log out"
                  size="mini"
                  floated="right"
                  onClick={this.handleLogout}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Menu pointing secondary widths={3}>
                  <Menu.Item name="home" as={NavLink} to="/" exact />
                  <Menu.Item name="new poll" as={NavLink} to="/add" />
                  <Menu.Item
                    name="leader board"
                    as={NavLink}
                    to="/leaderboard"
                  />
                </Menu>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Container>
    );
  }
}

function mapStateToProps({ users, authUser }) {
  return {
    authUser,
    users
  };
}

export default connect(mapStateToProps,{ setAuthUser })(Nav);