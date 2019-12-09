import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ columns, fixedHeader, ...props }) => {
    const [isTableSCrollbable, setScrollStatus] = useState(false);

    useEffect(() => {
        const tbodyElmnt = document.querySelector('tbody');
        setScrollStatus(
            tbodyElmnt && tbodyElmnt.offsetHeight < tbodyElmnt.scrollHeight
        );
    }, []);

    console.log(isTableSCrollbable);

    return (
        <thead>
            <tr>
                {columns.map((column, index) => {
                    const key = `table-header-cell-${index}`;
                    const { title, width } = column;

                    return (
                        <th
                            key={key}
                            width={
                                fixedHeader && isTableSCrollbable ? 400 : width
                            }
                        >
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
    columns: PropTypes.array.isRequired,
    fixedHeader: PropTypes.bool.isRequired
};

export default TableHeader;
