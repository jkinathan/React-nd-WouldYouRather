import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Menu, Image, Segment, Responsive, Grid ,Button ,Container } from 'semantic-ui-react'
import { setAuthUser } from '../actions/authUser';

class Nav extends Component {


  Logout = (event) =>{
    event.preventDefault();
    this.props.setAuthUser(null)
  }



  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const { authUser , users } = this.props
    const { activeItem } = this.state

    return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          as={NavLink} to="/" exact
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='new poll'
          active={activeItem === 'new poll'}
          as={NavLink} to="/add" exact
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='leader board'
          active={activeItem === 'leader board'}
          as={NavLink} to="/leaderboard" exact
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <div>
            <Image src='{users[authUser].avatarURL}' avatar />
            <span>{users[authUser].name}</span>
          </div>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.Logout}
          />
        </Menu.Menu>
      </Menu>
    </Segment>
    )
  }
}

function mapStateToProps({users, authUser}){
  return {
    authUser,
    users
  }
}

export default connect(mapStateToProps,{setAuthUser})(Nav);