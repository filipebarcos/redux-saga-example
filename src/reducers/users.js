import * as constants from '../constants';
import { Map, List } from 'immutable';
import { handleActions } from 'redux-actions';

const recordsLoading = (state, action) => {
  return state.set('loading', true);
};

const recordsSuccess = (state, action) => {
  return state.withMutations(state => {
    state.set('records', action.data);
    state.set('loading', false);
  });
};

const recordsFailed = (state, action) => {
  return state.withMutations(state => {
    state.set('records', new List());
    state.set('loading', false);
  });
};

const handleRecordsActions = (type) => {
  return handleActions(
    {
      [`${type}.records.request`]: recordsLoading,
      [`${type}.records.success`]: recordsSuccess,
      [`${type}.records.failure`]: recordsFailed,
    }, new Map({
      records: new List(),
      loading: false,
    })
  );
};

export const users = handleRecordsActions(constants.USERS);
