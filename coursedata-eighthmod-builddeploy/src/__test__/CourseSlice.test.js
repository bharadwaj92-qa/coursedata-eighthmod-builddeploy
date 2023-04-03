import { render, screen, fireEvent } from '@testing-library/react';
import Enquiry from '../component/Enquiry'
import { create } from 'react-test-renderer';
import courseSlice from '../redux/courseSlice';

describe('Reducer', () => {


    test('returns initial state', () => {
        const initialState = {
            name: null,
            phone: 0,
            email: null,
            subject: null
        };
        const result = courseSlice(undefined, {});
        expect(result).toEqual(initialState);
    });




})