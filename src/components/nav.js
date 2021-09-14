import React, { Component } from 'react'
import { Menu, Image, Segment } from 'semantic-ui-react'

export default class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='new poll'
          active={activeItem === 'new poll'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='leader board'
          active={activeItem === 'leader board'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <div>
            <Image src='/images/wireframe/square-image.png' avatar />
            <span>Username</span>
          </div>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </Segment>
    )
  }
}