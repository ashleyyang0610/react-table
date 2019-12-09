# React Table

## Usage

1. Install the latest version of [react](https://github.com/facebook/react) and [react-component](https://github.com/trendmicro-frontend/react-component):

```
npm install --save react @trendmicro/react-component
```

2. At this point you can import `@trendmicro/react-component` and its styles in your application as follows:

```js
import Table from '@trendmicro/react-component';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-component/dist/react-component.css';
```

## Documentation

The examples for the component is located under `/docs`.

## API

### Properties

**Noun** or **Adjective + Noun** is recommended for defining a property in any types: boolean, number, string, etc. For examples:

| Name       | Type                                                 | Default | Description                                         |
| :--------- | :--------------------------------------------------- | :------ | :-------------------------------------------------- |
| id         | string\|number                                       |         |
| title      | node                                                 |         | Title content.                                      |
| activeKey  | any                                                  |         | Marks the Table with a matching eventKey as active. |
| activePage | number                                               | 1       |
| placement  | one of:<br>'top',<br>'right',<br>'bottom',<br>'left' | 'right' | Sets the direction the Table is positioned towards. |

**Verb** or **Verb + Noun** is recommended for defining a property in boolean or function type. For examples:

| Name              | Type     | Default | Description                                                                  |
| :---------------- | :------- | :------ | :--------------------------------------------------------------------------- |
| show              | boolean  | true    | When `true` The component will show itself.                                  |
| justified         | boolean  | false   | Whether to take the full width of the parent.                                |
| pullLeft          | boolean  | false   | Float the Table to the left.                                                 |
| enforceFocus      | boolean  | false   | When `true` The component will prevent focus from leaving it while open.     |
| mountOnEnter      | boolean  | false   | Wait until the first "enter" transition to mount tabs (add them to the DOM). |
| getDimensionValue | function |         | Function that returns the height or width of the animating DOM node.         |
