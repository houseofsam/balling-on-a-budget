import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
  // const wrapper = shallow(<ExpenseList expenses={expenses} />);
  const renderer = new ReactShallowRenderer();
  renderer.render(<ExpenseList expenses={expenses} />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});