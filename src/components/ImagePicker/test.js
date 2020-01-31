/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ImagePicker from './ImagePicker';


it('renders correctly', () => {
  renderer.create(<ImagePicker />);
});
