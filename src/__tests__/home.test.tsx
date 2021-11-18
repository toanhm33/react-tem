import React from 'react';
import HomePage from 'src/pages/HomePage';
import { wrapConfig } from '../helper/helper';

describe('<HomePage />', () => {
  it('renders without crashing', () => {
    const { getByText } = wrapConfig(<HomePage />);
    expect(getByText(/Books/)).toBeInTheDocument();
  });
});
