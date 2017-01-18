// @flow
import React from 'react';
import { connect } from 'react-redux';
import { loadUserIndex } from '../../actions';

type User = {
  id: string | number,
  name: string,
  email: string
};

class Index extends React.Component {
  componentWillMount() {
    this.props.loadUsers();
  }

  get renderEmptyBody() {
    if (this.props.loading) {
      return (
        <tr>
          <td colSpan={3}>LOADING!!!!</td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td colSpan={3}>There are currently no users.</td>
        </tr>
      );
    }
  }

  renderSingleBodyRow(user: User) {
    return (
      <tr key={user.get('id')}>
        <td>{user.get('id')}</td>
        <td>{user.get('name')}</td>
        <td>{user.get('email')}</td>
      </tr>
    );
  }

  get renderBody() {
    if (this.props.records.size === 0) return this.renderEmptyBody;
    return this.props.records.valueSeq().map(user => this.renderSingleBodyRow(user));
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {this.renderBody}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    records: state.get('users').get('records'),
    loading: state.get('users').get('loading')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUsers: () => dispatch(loadUserIndex())
  };
}

const UsersIndex = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
export default UsersIndex;
