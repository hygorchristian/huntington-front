/**
 * @format
 */

import 'react-native';
import React from 'react';
import Historico from './Historico';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Historico />);
});
