/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import FichaInformacoes from './FichaInformacoes';


it('renders correctly', () => {
  renderer.create(<FichaInformacoes />);
});
