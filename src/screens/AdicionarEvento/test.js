/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AdicionarEvento from './AdicionarEvento';


it('renders correctly', () => {
  renderer.create(<AdicionarEvento />);
});
