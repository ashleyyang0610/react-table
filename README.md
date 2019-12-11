# React Table

## Get Start

**Put all source files into a folder `react-table` first.**

### Import from the build files directly

```js
import 'react-table/dist/react-table.css';

export Table, { Pagination } from 'react-table';
```

### Import from the source files

**Used node, yarn version are `Node v12.13.1` and `Yarn v1.19.2`.**

1. Copy the folder `react-table` to your project dictionary.

2. Install the dependencies.

```js
yarn install
```

or

```js
npm install
```

3. Import the component to your project as below:

```js
import Table, { Pagination } from './src';
```

## Run test

```js
yarn test
npm run test
```

## Usage

#### Table
```js
<Table
    columns={columns}
    data={data}
    fixedHeader
    height={100}
/>
```

#### Pagination

```js
<Pagination
    onPageChange={onPageChange}
    page={state.page}
    pageLength={Math.ceil(data.length / PER_PAGE)}
/>
```

## Documentation

The examples for the component is located under `/docs`.

## API

### Properties

#### Table

| Name       | Type                           | Default       | Description                                               |
| :--------- | :----------------------------- | :------------ | :-------------------------------------------------------- |
| columns    | Object[]                       | Required      | The columns config of table, see Column below for details.|
| data       | Object[]                       | Required      | Data record array to be rendered.                         |
| emptyRender| Function                       |() => 'No data'| Empty content render function. It returns a react node.   |
| fixedHeader| Boolean                        | false         | Whether table head is fixed.                              |
| height     | Number                         | false         | The height of the table.                                  |
| hoverable  | Boolean                        | true          | Whether use row hover style.                              |
| loading    | Boolean                        | false         | Whether table is loading.                                 |
| theme      | one of:<br>'dark',<br>'light'  | 'light'       | Type of table theme.                                      |
| width      | Number                         |               | The width of the table.                                   |

#### Column

| Name   | Type                                 | Default  | Description                                               |
| :----- | :----------------------------------- | :------- | :-------------------------------------------------------- |
| title  | React Node or Function(): React Node | Required | Title of this column.                                     |
| dataKey| String                               | Required | Display field of the data record.                         |
| width  | Number                               |          | Specified column width                                    |
| render | Function(value, record, rowIndex)    |          | The render function of cell, has two params: the text of this cell, the record of this row, it returns a react node.                                         |

#### Pagination

| Name             | Type                  | Default       | Description                                               |
| :--------------- | :-------------------- | :------------ | :-------------------------------------------------------- |
| onPageChange     | Function              | Required      | Action dispatched when page onchnage.                     |
| page             | Number                | Required      | Current page.                                             |
| pageLength       | Number                | Required      | Total page length.                                        |
| firstPageRenderer| Function              |() => 'First'  | Content renderer in "first page" button. It returns a react node.|
| lastPageRenderer | Function              |() => 'Last'   | Content renderer in "last page" button. It returns a react node.|
| nextPageRenderer | Function              |() => 'Next'   | Content renderer in "next page" button. It returns a react node.|
| prevPageRenderer | Function              |() => 'Prev'   | Content renderer in "prev page" button. It returns a react node.|


#### Todo items

1. The unit test for react ref.
2. Make the table header height adjustable.
3. Make the node in pagination more flexible. Not only able to modify the content inside the button node, but also able to change whole node which able to be triggered onPageChange events.
4. Implement useContext to leave the component extening flexibilty in the future.
5. Make the loader component cusomizable.
