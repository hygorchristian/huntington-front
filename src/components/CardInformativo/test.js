/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CardInformativo from './CardInformativo';


it('renders correctly', () => {
  renderer.create(<CardInformativo />);
});
