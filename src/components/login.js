
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Segment,  Grid,  Header,  Image,  Form,  Loader,  Dimmer} from 'semantic-ui-react';
import { setAuthUser } from '../actions/authUser';

export class Login extends Component {
  state = {
    loading: false,
    value: ''
  };

  handleLoading = () => {
    this.setState({ loading: true });
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
                    {this.state.loading === true && (
                      <Dimmer active inverted>
                        <Loader inverted content="Loading" />
                      </Dimmer>
                    )}
                    <Image src="data:image/png;base64,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" size="medium" centered />
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
