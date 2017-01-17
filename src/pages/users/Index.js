// @flow
import React from 'react';
import { connect } from 'react-redux';

type User = {
  id: string | number,
  name: string,
  email: string
};

class Index extends React.Component {
  get renderEmptyBody () {
    return (
      <tr>
        <td colSpan={3}>There are currently no users.</td>
      </tr>
    );
  }

  renderSingleBodyRow (user: User) {
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  }

  get renderBody () {
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
    records: state.get('records', new Map()).get('records')
  };
};

const UsersIndex = connect(mapStateToProps)(Index);
export default UsersIndex;
