/**
 * @format
 */

import 'react-native';
import React from 'react';
import TabItem from './TabItem';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<TabItem />);
});
