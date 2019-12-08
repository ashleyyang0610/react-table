The sortable columns in the example are: "Name", "Age".

```jsx
initialState = {
    sortColumnKey: 'name',
    sortOrder: 'asc'
};

const columns = [
    { title: 'Name', dataKey: 'name', sortable: true },
    { title: 'Gender', dataKey: 'gender' },
    { title: 'Type', dataKey: 'type' },
    { title: 'Age', dataKey: 'age', sortable: true },
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
const toggleSortOrder = column => event => {
    event.stopPropagation();
    event.preventDefault();
    const sortColumnKey = column.dataKey;
    const sortOrder = state.sortOrder === 'desc' ? 'asc' : 'desc';
    setState({ sortColumnKey, sortOrder });
};

const renderSortableTableHeader = column => {
    const { sortColumnKey, sortOrder } = state;
    const isSortingKey = column.dataKey === sortColumnKey;
    const nextSortOrder = sortOrder === 'desc' ? '↑' : '↓';
    return (
        <div
            style={{ cursor: 'pointer', display: 'flex' }}
            onClick={toggleSortOrder(column)}
        >
            <div style={{ flex: 'auto' }}>{column.titleText}</div>
            {isSortingKey && <div>{nextSortOrder}</div>}
        </div>
    );
};

const sortableColumns = columns.map((column, index) => {
    if (column.sortable) {
        return {
            ...column,
            titleText: column.title,
            title: renderSortableTableHeader
        };
    }
    return column;
});

const sortedData = _orderBy(data, [state.sortColumnKey], [state.sortOrder]);

<Table columns={sortableColumns} data={sortedData} width="600px" />;
```
