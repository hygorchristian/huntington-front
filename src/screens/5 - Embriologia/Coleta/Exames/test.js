/**
 * @format
 */

import 'react-native';
import React from 'react';
import Exames from './Exames';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Exames />);
});
