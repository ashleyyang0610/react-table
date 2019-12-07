import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';

const TableBody = ({ columns, data, ...props }) => {
    return (
        <tbody>
            {data.map((row, rowIndex) => {
                const rowKey = `table-header-row-${rowIndex}`;
                return (
                    <tr key={rowKey}>
                        {columns.map((column, cellIndex) => {
                            const cellKey = `table-header-cell-${rowIndex}-${cellIndex}`;
                            const cellValue = _get(row, column.dataKey);
                            const cell =
                                typeof column.render === 'function'
                                    ? column.render(cellValue, row, rowIndex)
                                    : cellValue;
                            return <td key={cellKey}>{cell}</td>;
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
};

TableBody.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
};

export default TableBody;
