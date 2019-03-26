import { createStore } from 'redux';

const SET_USERS = 'SET_USERS';

const reducer = (state=[], action)=> {
  switch(action.type){
    case 'SET_USERS':
      state = action.data
      break;
  }
  return state;
};

const setUsers = (data)=> {
  return {
    type: SET_USERS,
    data
  };
};

const store = createStore(reducer);

export default store;
export { setUsers };
