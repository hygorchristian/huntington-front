/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ContatoInformacoes from './ContatoInformacoes';


it('renders correctly', () => {
  renderer.create(<ContatoInformacoes />);
});
