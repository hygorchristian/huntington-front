/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Informacoes from './Informacoes';


it('renders correctly', () => {
  renderer.create(<Informacoes />);
});
