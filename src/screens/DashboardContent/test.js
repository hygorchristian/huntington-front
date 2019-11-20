/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import DashboardContent from './DashboardContent';


it('renders correctly', () => {
  renderer.create(<DashboardContent />);
});
