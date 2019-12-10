import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Pagination from '../src/Pagination';

describe('Pagination', () => {
    let pagination;
    let onPageChange;

    describe('with default settings', () => {
        beforeEach(() => {
            onPageChange = jest.fn();
            pagination = shallow(
                <Pagination
                    page={1}
                    onPageChange={onPageChange}
                    pageLength={8}
                />
            );
        });

        test('should render correctly', () => {
            expect(toJSON(pagination)).toMatchSnapshot();
        });

        test('onPageChange props should be triggered and the page value should be updated when "first" button is click', () => {
            pagination
                .find('button')
                .at(0)
                .simulate('click');
            pagination.update();
            expect(toJSON(pagination)).toMatchSnapshot();
            expect(onPageChange.mock.calls.length).toBe(1);
        });

        test('onPageChange props should be triggered and the page value should be updated when "prev" button is click', () => {
            pagination
                .find('button')
                .at(1)
                .simulate('click');
            pagination.update();
            expect(toJSON(pagination)).toMatchSnapshot();
            expect(onPageChange.mock.calls.length).toBe(1);
        });

        test('onPageChange props should be triggered and the page value should be updated when "next" button is click', () => {
            pagination
                .find('button')
                .at(2)
                .simulate('click');
            pagination.update();
            expect(toJSON(pagination)).toMatchSnapshot();
            expect(onPageChange.mock.calls.length).toBe(1);
        });

        test('onPageChange props should be triggered and the page value should be updated when "last" button is click', () => {
            pagination
                .find('button')
                .at(3)
                .simulate('click');
            pagination.update();
            expect(toJSON(pagination)).toMatchSnapshot();
            expect(onPageChange.mock.calls.length).toBe(1);
        });
    });
});
