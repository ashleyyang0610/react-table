#### Customize button content

Use `prevPageRenderer`, `nextPageRenderer`, `lastPageRenderer`, `firstPageRenderer` props to cusomize the content of the buttons yourself.

See [pagination props usage](#pagination-1) for the details.

```jsx
initialState = {
    page: 1
};

const onPageChange = page => {
    setState({ page });
};

const prevPageRenderer = () => '<';

const nextPageRenderer = () => '>';

const lastPageRenderer = () => 'Last';

const firstPageRenderer = () => 'First';

<Pagination
    onPageChange={onPageChange}
    page={state.page}
    pageLength={8}
    prevPageRenderer={prevPageRenderer}
    nextPageRenderer={nextPageRenderer}
    lastPageRenderer={lastPageRenderer}
    firstPageRenderer={firstPageRenderer}
/>;
```

#### Customize pagination styles

```jsx
initialState = {
    page: 1
};

const onPageChange = page => {
    setState({ page });
};

<Pagination
    onPageChange={onPageChange}
    page={state.page}
    pageLength={8}
    className="customized-pagination"
/>;
```

```css
/* Customize pagination as belows */
.customized-pagination {
    /* Write your customized styles here */
    button {
        color: red;
        font-weight: bold;
    }
}
```
