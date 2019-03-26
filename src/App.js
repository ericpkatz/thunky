import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUsers } from './store';
import axios from 'axios';

class App extends Component{
  componentDidMount(){
    axios.get('/api/users')
      .then( response => response.data)
      .then( users => this.props.setUsers(users));
  }
  render(){
    const { users } = this.props;
    return (
      <div>
        <h1>App</h1>
        <ul>
        {
          users.map( user => {
            return (
              <li key={ user.id }>{ user.name }</li>
            );
          })

        }
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = ( dispatch)=> {
  return {
    setUsers: (users)=> dispatch(setUsers(users))
  };
};

const mapStateToProps = (state)=> {
  return {
    users: state
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
