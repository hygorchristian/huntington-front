/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CheckLabel from './CheckLabel';


it('renders correctly', () => {
  renderer.create(<CheckLabel />);
});
