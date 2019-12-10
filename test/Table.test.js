import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Table from '../src';

describe('Table', () => {
    let table;

    describe('with default settings', () => {
        const tableCellRender = (value, row, index) => {
            return <span style={{ color: value }}>{value}</span>;
        };

        const columns = [
            { title: 'Name', dataKey: 'name', width: 300 },
            { title: 'Gender', dataKey: 'gender' },
            { title: 'Type', dataKey: 'type' },
            { title: 'Age', dataKey: 'age' },
            {
                title: column => (
                    <span style={{ color: 'red' }}>{column.dataKey}</span>
                ),
                dataKey: 'color',
                render: tableCellRender
            }
        ];

        const data = [
            {
                id: 1,
                name: 'Hana',
                type: 'dog',
                age: 4,
                gender: 'female',
                color: 'black'
            },
            {
                id: 2,
                name: 'Lucky',
                type: 'dog',
                age: 8,
                gender: 'male',
                color: 'white'
            },
            {
                id: 3,
                name: 'Ginger',
                type: 'cat',
                age: 2,
                gender: 'female',
                color: 'orange'
            },
            {
                id: 4,
                name: 'Kiwi',
                type: 'rabbit',
                age: 3,
                gender: 'male',
                color: 'gray'
            },
            {
                id: 5,
                name: 'Max',
                type: 'dog',
                age: 7,
                gender: 'female',
                color: 'brown'
            }
        ];

        beforeEach(() => {
            table = mount(<Table columns={columns} data={data} />);
        });

        test('should render correctly', () => {
            expect(toJSON(table)).toMatchSnapshot();
        });
    });

    describe('test loading status', () => {
        const columns = [
            { title: 'Name', dataKey: 'name', width: 300 },
            { title: 'Gender', dataKey: 'gender' },
            { title: 'Type', dataKey: 'type' },
            { title: 'Age', dataKey: 'age' },
            { title: 'Color', dataKey: 'color' }
        ];

        const data = [
            {
                id: 1,
                name: 'Hana',
                type: 'dog',
                age: 4,
                gender: 'female',
                color: 'black'
            },
            {
                id: 2,
                name: 'Lucky',
                type: 'dog',
                age: 8,
                gender: 'male',
                color: 'white'
            },
            {
                id: 3,
                name: 'Ginger',
                type: 'cat',
                age: 2,
                gender: 'female',
                color: 'orange'
            },
            {
                id: 4,
                name: 'Kiwi',
                type: 'rabbit',
                age: 3,
                gender: 'male',
                color: 'gray'
            },
            {
                id: 5,
                name: 'Max',
                type: 'dog',
                age: 7,
                gender: 'female',
                color: 'brown'
            }
        ];

        beforeEach(() => {
            table = mount(
                <Table columns={columns} data={data} loading={true} />
            );
        });

        test('should render correctly', () => {
            expect(toJSON(table)).toMatchSnapshot();
        });
    });

    describe('unhoverable table', () => {
        const columns = [
            { title: 'Name', dataKey: 'name', width: 300 },
            { title: 'Gender', dataKey: 'gender' },
            { title: 'Type', dataKey: 'type' },
            { title: 'Age', dataKey: 'age' },
            { title: 'Color', dataKey: 'color' }
        ];

        const data = [
            {
                id: 1,
                name: 'Hana',
                type: 'dog',
                age: 4,
                gender: 'female',
                color: 'black'
            },
            {
                id: 2,
                name: 'Lucky',
                type: 'dog',
                age: 8,
                gender: 'male',
                color: 'white'
            },
            {
                id: 3,
                name: 'Ginger',
                type: 'cat',
                age: 2,
                gender: 'female',
                color: 'orange'
            },
            {
                id: 4,
                name: 'Kiwi',
                type: 'rabbit',
                age: 3,
                gender: 'male',
                color: 'gray'
            },
            {
                id: 5,
                name: 'Max',
                type: 'dog',
                age: 7,
                gender: 'female',
                color: 'brown'
            }
        ];

        beforeEach(() => {
            table = shallow(
                <Table columns={columns} data={data} hoverable={false} />
            );
        });

        test('should render correctly', () => {
            expect(toJSON(table)).toMatchSnapshot();
        });
    });

    describe('test empty data dsiplay', () => {
        const columns = [
            { title: 'Name', dataKey: 'name', width: 300 },
            { title: 'Gender', dataKey: 'gender' },
            { title: 'Type', dataKey: 'type' },
            { title: 'Age', dataKey: 'age' },
            { title: 'Color', dataKey: 'color' }
        ];

        const data = [];

        beforeEach(() => {
            table = mount(<Table columns={columns} data={data} />);
        });

        test('should render correctly', () => {
            expect(toJSON(table)).toMatchSnapshot();
        });
    });

    describe('fixed table height', () => {
        const columns = [
            { title: 'Name', dataKey: 'name', width: 300 },
            { title: 'Gender', dataKey: 'gender' },
            { title: 'Type', dataKey: 'type' },
            { title: 'Age', dataKey: 'age' },
            { title: 'Color', dataKey: 'color' }
        ];

        const data = [
            {
                id: 1,
                name: 'Hana',
                type: 'dog',
                age: 4,
                gender: 'female',
                color: 'black'
            },
            {
                id: 2,
                name: 'Lucky',
                type: 'dog',
                age: 8,
                gender: 'male',
                color: 'white'
            },
            {
                id: 3,
                name: 'Ginger',
                type: 'cat',
                age: 2,
                gender: 'female',
                color: 'orange'
            },
            {
                id: 4,
                name: 'Kiwi',
                type: 'rabbit',
                age: 3,
                gender: 'male',
                color: 'gray'
            },
            {
                id: 5,
                name: 'Max',
                type: 'dog',
                age: 7,
                gender: 'female',
                color: 'brown'
            }
        ];

        beforeEach(() => {
            table = mount(<Table columns={columns} data={data} height={150} />);
        });

        test('should render correctly', () => {
            expect(toJSON(table)).toMatchSnapshot();
        });
    });

    describe('fixed table width', () => {
        const columns = [
            { title: 'Name', dataKey: 'name', width: 300 },
            { title: 'Gender', dataKey: 'gender' },
            { title: 'Type', dataKey: 'type' },
            { title: 'Age', dataKey: 'age' },
            { title: 'Color', dataKey: 'color' }
        ];

        const data = [
            {
                id: 1,
                name: 'Hana',
                type: 'dog',
                age: 4,
                gender: 'female',
                color: 'black'
            },
            {
                id: 2,
                name: 'Lucky',
                type: 'dog',
                age: 8,
                gender: 'male',
                color: 'white'
            },
            {
                id: 3,
                name: 'Ginger',
                type: 'cat',
                age: 2,
                gender: 'female',
                color: 'orange'
            },
            {
                id: 4,
                name: 'Kiwi',
                type: 'rabbit',
                age: 3,
                gender: 'male',
                color: 'gray'
            },
            {
                id: 5,
                name: 'Max',
                type: 'dog',
                age: 7,
                gender: 'female',
                color: 'brown'
            }
        ];

        beforeEach(() => {
            table = shallow(
                <Table columns={columns} data={data} width={400} />
            );
        });

        test('should render correctly', () => {
            expect(toJSON(table)).toMatchSnapshot();
        });
    });

    describe('fixedHeader table', () => {
        const columns = [
            { title: 'Name', dataKey: 'name', width: 300 },
            { title: 'Gender', dataKey: 'gender' },
            { title: 'Type', dataKey: 'type' },
            { title: 'Age', dataKey: 'age' },
            { title: 'Color', dataKey: 'color' }
        ];

        const data = [
            {
                id: 1,
                name: 'Hana',
                type: 'dog',
                age: 4,
                gender: 'female',
                color: 'black'
            },
            {
                id: 2,
                name: 'Lucky',
                type: 'dog',
                age: 8,
                gender: 'male',
                color: 'white'
            },
            {
                id: 3,
                name: 'Ginger',
                type: 'cat',
                age: 2,
                gender: 'female',
                color: 'orange'
            },
            {
                id: 4,
                name: 'Kiwi',
                type: 'rabbit',
                age: 3,
                gender: 'male',
                color: 'gray'
            },
            {
                id: 5,
                name: 'Max',
                type: 'dog',
                age: 7,
                gender: 'female',
                color: 'brown'
            }
        ];

        beforeEach(() => {
            table = mount(
                <Table
                    columns={columns}
                    data={data}
                    fixedHeader={true}
                    height={100}
                />
            );
        });

        test('should render correctly', () => {
            expect(toJSON(table)).toMatchSnapshot();
        });
    });
});
