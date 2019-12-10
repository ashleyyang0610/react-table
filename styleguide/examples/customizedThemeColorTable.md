#### Customize default theme style - light theme

```jsx
const columns = [
    { title: 'Name', dataKey: 'name', width: '300px' },
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

<Table columns={columns} data={data} />;
```

```css
/* Customize theme style as belows */

[class*='table--light'] {
    /* Write your customized light theme styles here */
    background-color: #fff;
    thead {
        background: #f5f5f5;
        color: #888;
    }
}
```

#### Customize default theme style - dark theme

```jsx
const columns = [
    { title: 'Name', dataKey: 'name', width: '300px' },
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

<Table columns={columns} data={data} theme="dark" />;
```

```css
/* Customize theme style as belows */

[class*='table--dark'] {
    /* Write your customized dark theme styles here */
    background-color: #222;
    color: #808080;
    thead {
        background: #393939;
        color: #00ad5f;
    }
    th {
        border-color: #393939;
    }
    td {
        border-color: #222;
    }
}
```

#### Customize new theme style

```jsx
const columns = [
    { title: 'Name', dataKey: 'name', width: '300px' },
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

<Table className="customize-theme--blue" columns={columns} data={data} />;
```
