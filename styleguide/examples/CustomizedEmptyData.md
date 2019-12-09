When data length is 0, the empty content would be shown.

Set `emptyRender` for a function which help you customize the empty content.

See [table props usage](#table) for the details.

```jsx
const columns = [
    { title: 'Name', dataKey: 'name' },
    { title: 'Gender', dataKey: 'gender' },
    { title: 'Type', dataKey: 'type' },
    { title: 'Age', dataKey: 'age' },
    { title: 'Color', dataKey: 'color' }
];

const data = [];

const emptyRender = () => {
    return (
        <p style={{ color: '#bbb', lineHeight: '100px', textAlign: 'center' }}>
            No available data found
        </p>
    );
};

<Table columns={columns} data={data} emptyRender={emptyRender} width="100%" />;
```
