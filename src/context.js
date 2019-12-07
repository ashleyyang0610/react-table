import React from 'react';

const TableContext = React.createContext({
    theme: 'dark'
});
export const useTableContext = () => React.useContext(TableContext);

export default TableContext;
