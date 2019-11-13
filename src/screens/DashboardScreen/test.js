/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import DashboardScreen from './DashboardScreen';


it('renders correctly', () => {
  renderer.create(<DashboardScreen />);
});
