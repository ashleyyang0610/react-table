```jsx
const tableCellRender = (value, row, index) => {
    return <span style={{ color: value }}>{value}</span>;
};

const columns = [
    { title: 'Name', dataKey: 'name' },
    { title: 'Gender', dataKey: 'gender' },
    { title: 'Type', dataKey: 'type' },
    { title: 'Age', dataKey: 'age' },
    { title: 'Color', dataKey: 'color', render: tableCellRender }
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

<Table columns={columns} data={data} width="100%" />;
```
