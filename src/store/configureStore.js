import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

export default () => {
  const store = createStore(
    combineReducers({
      // root state name : reducer thats supposed to manage the state
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );

  return store;
}
