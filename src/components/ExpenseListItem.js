import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

// We have access to dispatch from inside of our connected components so we could call it directly to dispatch actions
const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => {
  return (
    <div>
        <h3>Description: {description}</h3>
        Amount: {amount} -- Created At: {createdAt}
        <button onClick={() => {
          dispatch(removeExpense({ id }));
        }}>
          Delete
        </button>
    </div>
  );
};

// dont need anything from state
export default connect()(ExpenseListItem);
