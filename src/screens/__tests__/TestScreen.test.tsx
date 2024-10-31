import React from 'react';
import {render, screen} from '@testing-library/react-native';
import TestScreen from '../TestScreen';

describe('TestScreen', () => {
  it('renders correctly', () => {
    render(<TestScreen />);
    expect(screen.getByText('TestScreen')).toBeTruthy();
  });
});
