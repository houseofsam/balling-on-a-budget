import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  // renders rendered output of the jsx passed in in the line above
  // console.log(renderer.getRenderOutput());
  // first time we run this test case, it'll always pass bc no existing snapshot
  // 2nd time we run it, it will compare with existing one. A match = pass 
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});