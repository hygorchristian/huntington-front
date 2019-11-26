/**
 * @format
 */

import 'react-native';
import React from 'react';
import Informacoes from './Informacoes';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Informacoes />);
});
