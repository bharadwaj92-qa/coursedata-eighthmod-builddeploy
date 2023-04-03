import { render, screen, fireEvent } from '@testing-library/react';
import Enquiry from '../component/Enquiry'
import { create } from 'react-test-renderer';

test("Test case 1", () => {
    let def = create(<Enquiry />);
    expect(def.toJSON()).toMatchSnapshot();
})