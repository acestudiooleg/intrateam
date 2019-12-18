import * as React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

interface IState {
  name: string;
  lastname: string;
  tree: any;
}

const mapPropsToState = state => ({
  name: get(state, 'auth.user.name', 'Hello'),
  lastname: get(state, 'auth.user.lastname', 'World'),
  tree: state,
});

class Login extends React.Component<IState> {
  render() {
    return (
      <div>
        <p>
          Login {this.props.name} {this.props.lastname}
        </p>
        <pre>APP TREE: {JSON.stringify(this.props.tree, null, '\t')}</pre>
      </div>
    );
  }
}

export default connect(mapPropsToState)(Login);
