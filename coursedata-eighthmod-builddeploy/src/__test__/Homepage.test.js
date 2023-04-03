import { render, screen, fireEvent } from '@testing-library/react';
import Homepage from '../component/Homepage'
import { create } from 'react-test-renderer';

test("Test case 1", () => {
    let abc = create(<Homepage />);
    expect(abc.toJSON()).toMatchSnapshot();
})