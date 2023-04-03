import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import React from 'react';
import Enquiry from './component/Enquiry'
import Homepage from './component/Homepage'

test('renders learn react link', () => {
  render(<Enquiry />);
  const linkElement = screen.getByText(/Enquiry form/i);
  expect(linkElement).toBeInTheDocument();
});


// test('navigation works correctly', () => {
//   const { getByText } = render(<Enquiry />);
//   const homeLink = getByText('Enquiry');
//   // const aboutLink = getByText('About');

//   fireEvent.click(homeLink);
//   expect(window.location.pathname).toBe('/enquiries');
//   // expect(getByText('About Page')).toBeInTheDocument();

// });
