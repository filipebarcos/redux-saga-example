import { List, fromJS } from 'immutable';
import { users as userReducer} from '../users';

describe('testing rootReducer', () => {
  const initialState = fromJS({
    records: new List(),
    loading: false
  });

  it('sets loading as true when action type is users.records.request', () => {
    const action = { type: 'users.records.request' };
    expect(userReducer(initialState, action)).toEqual(initialState.set('loading', true));
  });

  it('sets loading as false and sets the records when action type is users.records.success', () => {
    const payload = fromJS([{id: 1, name: 'test'}]);
    const action = {
      type: 'users.records.success',
      data: payload,
    };

    expect(userReducer(initialState, action)).toEqual(initialState.set('records', payload));
  });

  it('sets loading as false when action type is users.records.failure', () => {
    const action = { type: 'users.records.failure' };
    expect(userReducer(initialState, action)).toEqual(initialState);
  });
});
