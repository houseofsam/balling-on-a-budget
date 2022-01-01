import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => (
      <ExpenseListItem
        key={expense.id}
        // alt can just pass in one prop via spread operator
        {...expense}
        // description={expense.description}
        // amount={expense.amount}
        // createdAt={expense.createdAt}
      />
    ))}
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

