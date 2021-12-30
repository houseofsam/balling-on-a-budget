import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createdAt, id }) => {
  return (
    <div>
        <Link to={`/edit/${id}`}>
          <h3>Description: {description}</h3>
        </Link>
        Amount: {amount} -- Created At: {createdAt}
    </div>
  );
};

// dont need anything from state
export default ExpenseListItem;
