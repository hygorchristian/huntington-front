/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AdicionarRow from './AdicionarRow';


it('renders correctly', () => {
  renderer.create(<AdicionarRow />);
});
