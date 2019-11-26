/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Contatos from './Contatos';


it('renders correctly', () => {
  renderer.create(<Contatos />);
});
