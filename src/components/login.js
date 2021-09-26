
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Segment,  Grid,  Header,  Image,  Form} from 'semantic-ui-react';
import { setAuthUser } from '../actions/authUser';

export class Login extends Component {
  state = {
    value: ''
  };


  onChange = (e, { value }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { setAuthUser } = this.props;
    const authedUser = this.state.value;

    new Promise((res, rej) => {
      setTimeout(() => res(), 500);
    }).then(() => setAuthUser(authedUser));
  };

  LoginDropdown = () => {
    const { users } = this.props;
    return users.map(user => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL }
    }));
  };

  render() {

    const { value } = this.state;
    const disabled = value === '' ? true : false;


    return (
      <Fragment>
        <Segment.Group>
          <Header as="h4" block attached="top" textAlign="center">
                <Header.Content>Welcome to the Would You Rather App!</Header.Content>
                <Header.Subheader>Please sign in to continue</Header.Subheader>
            </Header>

            <div>
              <Grid padded textAlign="center">
                <Grid.Row className="login">
                  <Grid.Column width={16}>
                    
                    <Image src="/reactor.png" size="medium" centered />
                    <br />
                    
                    <Form onSubmit={this.handleSubmit}>
                      <Header as="h2" color="green">
                        Sign In
                      </Header>
                      <Form.Dropdown
                        placeholder="Select a User"
                        fluid
                        selection
                        scrolling
                        options={this.LoginDropdown()}
                        value={value}
                        onChange={this.onChange}
                        required
                      />
                      <Form.Button content="Login" positive disabled={disabled} fluid />
                    </Form>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>

        </Segment.Group>
        
      </Fragment>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  };
}

export default connect(mapStateToProps,{ setAuthUser})(Login);
