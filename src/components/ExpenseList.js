import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No Expenses</p>
      ) : (
        props.expenses.map((expense) => (
          <ExpenseListItem
            key={expense.id}
            {...expense}
          />
        ))
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  // return an object with any k/v pairs we like
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

//1) create new const for higher order component
export default connect(mapStateToProps)(ExpenseList);

