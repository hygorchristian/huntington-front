/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Contato from './Contato';


it('renders correctly', () => {
  renderer.create(<Contato />);
});
