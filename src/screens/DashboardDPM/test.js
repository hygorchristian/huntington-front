/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import DashboardDPM from './DashboardDPM';


it('renders correctly', () => {
  renderer.create(<DashboardDPM />);
});
