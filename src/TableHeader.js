import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ columns, ...props }) => {
    return (
        <thead>
            <tr>
                {columns.map((column, index) => {
                    const key = `table-header-cell-${index}`;
                    const { title } = column;
                    return (
                        <th key={key}>
                            {typeof title === 'function'
                                ? title(column)
                                : title}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    columns: PropTypes.array.isRequired
};

export default TableHeader;
