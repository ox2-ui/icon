/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import FontIcon from './FontIcon';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <FontIcon
      color="#FFFFFF"
      icon="users2"
      size="35px"
      style={{ backgroundColor: 'mediumvioletred', padding: '10px' }}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
