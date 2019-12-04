/**
 * @format
 */

import 'react-native';
import React from 'react';
import Coletas from './Coletas';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Coletas />);
});
