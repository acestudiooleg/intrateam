import * as React from 'react';
import { connect } from 'react-redux';
import { Spinner, Button } from 'reactstrap';

import { changeName, goToLogin } from '../../actions/auth';
import { IUser, getUser } from '../../reducers/auth';
import { selectFullName } from '../../selectors/auth';

interface IState {
  user: IUser;
  fullName;
  userLoading: boolean;
  changeName: (name: string, lastname: string) => void;
  goToLogin: () => void;
  tree: any;
}

const mapPropsToState = state => ({
  user: getUser(state),
  fullName: selectFullName(state),
  userLoading: state.auth.isLoading,
  tree: state,
});

const mapDispatchToProps = {
  changeName,
  goToLogin,
};

class Dashboard extends React.Component<IState> {
  public changeName = () => this.props.changeName('Luke', 'Skywalker');
  render() {
    let message = 'You not authorized';
    const { user, fullName, userLoading } = this.props;
    if (user) {
      message = `${user.name} ${user.lastname}`;
    }
    return (
      <div>
        <h1>Dashboard </h1>
        <p>"{userLoading ? <Spinner color="primary" /> : message}"</p>
        <p>
          "{userLoading ? <Spinner color="danger" /> : fullName}" from reselect
        </p>
        <p>
          <Button onClick={this.changeName} color="primary">
            Change Name
          </Button>
        </p>
        <p>
          <Button onClick={this.props.goToLogin} color="success">
            Go To Login using SAGA
          </Button>
        </p>
        <pre>APP TREE: {JSON.stringify(this.props.tree, null, '\t')}</pre>
      </div>
    );
  }
}

export default connect(
  mapPropsToState,
  mapDispatchToProps,
)(Dashboard);
