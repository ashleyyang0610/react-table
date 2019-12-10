When data length is 0, the empty content would be shown. The default empty content is "No data".

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

<Table columns={columns} data={data} />;
```
