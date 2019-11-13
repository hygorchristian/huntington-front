/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TabDashboard from './TabDashboard';


it('renders correctly', () => {
  renderer.create(<TabDashboard />);
});
