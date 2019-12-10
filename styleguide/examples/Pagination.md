Combine the `<Pagination />` component and `<Table />` component to realize a pagination table.

See [table props usage](#table) for the details.

See [pagination props usage](#pagination-1) for the details.

```jsx
initialState = {
    page: 1
};

const PER_PAGE = 6;

const columns = [
    { title: 'Name', dataKey: 'name' },
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
    },
    {
        id: 6,
        name: 'Hana',
        type: 'dog',
        age: 4,
        gender: 'female',
        color: 'black'
    },
    {
        id: 7,
        name: 'Lucky',
        type: 'dog',
        age: 8,
        gender: 'male',
        color: 'white'
    },
    {
        id: 8,
        name: 'Ginger',
        type: 'cat',
        age: 2,
        gender: 'female',
        color: 'orange'
    },
    {
        id: 9,
        name: 'Kiwi',
        type: 'rabbit',
        age: 3,
        gender: 'male',
        color: 'gray'
    },
    {
        id: 10,
        name: 'Max',
        type: 'dog',
        age: 7,
        gender: 'female',
        color: 'brown'
    },
    {
        id: 11,
        name: 'Hana',
        type: 'dog',
        age: 4,
        gender: 'female',
        color: 'black'
    },
    {
        id: 12,
        name: 'Lucky',
        type: 'dog',
        age: 8,
        gender: 'male',
        color: 'white'
    },
    {
        id: 13,
        name: 'Ginger',
        type: 'cat',
        age: 2,
        gender: 'female',
        color: 'orange'
    },
    {
        id: 14,
        name: 'Kiwi',
        type: 'rabbit',
        age: 3,
        gender: 'male',
        color: 'gray'
    },
    {
        id: 15,
        name: 'Max',
        type: 'dog',
        age: 7,
        gender: 'female',
        color: 'brown'
    },
    {
        id: 16,
        name: 'Hana',
        type: 'dog',
        age: 4,
        gender: 'female',
        color: 'black'
    },
    {
        id: 17,
        name: 'Lucky',
        type: 'dog',
        age: 8,
        gender: 'male',
        color: 'white'
    },
    {
        id: 18,
        name: 'Ginger',
        type: 'cat',
        age: 2,
        gender: 'female',
        color: 'orange'
    },
    {
        id: 19,
        name: 'Kiwi',
        type: 'rabbit',
        age: 3,
        gender: 'male',
        color: 'gray'
    },
    {
        id: 20,
        name: 'Max',
        type: 'dog',
        age: 7,
        gender: 'female',
        color: 'brown'
    }
];

const onPageChange = page => {
    setState({ page });
};

const currentPageData = data.slice(
    (state.page - 1) * PER_PAGE,
    state.page * PER_PAGE
);

<div>
    <Table columns={columns} data={currentPageData} fixedHeader height={150} />
    <div
        style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}
    >
        <p style={{ margin: '12px 0px', fontSize: '13px' }}>
            {`${state.page} / ${Math.ceil(data.length / PER_PAGE)}`}
        </p>
        <Pagination
            onPageChange={onPageChange}
            page={state.page}
            pageLength={Math.ceil(data.length / PER_PAGE)}
        />
    </div>
</div>;
```
