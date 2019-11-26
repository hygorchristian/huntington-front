/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ARDashboard from './ARDashboard';


it('renders correctly', () => {
  renderer.create(<ARDashboard />);
});
