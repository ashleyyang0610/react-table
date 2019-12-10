import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Loader from '../src/Loader';

describe('Loader', () => {
    let loader;

    describe('with default settings', () => {
        beforeEach(() => {
            loader = shallow(<Loader />);
        });

        test('should render correctly', () => {
            expect(toJSON(loader)).toMatchSnapshot();
        });
    });
});
