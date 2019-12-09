import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _get from 'lodash/get';
import Loader from './Loader';
import styles from './index.styl';

const TableBody = ({
    columns,
    data,
    emptyRender,
    fixedHeader,
    height,
    loading,
    ...props
}) => {
    const showEmpty = data.length === 0;
    return (
        <tbody style={{ maxHight: fixedHeader ? `${height - 24}px` : null }}>
            {loading && (
                <tr>
                    <td colSpan={columns.length}>
                        <Loader
                            className={cx(styles['position-middle-content'])}
                        />
                    </td>
                </tr>
            )}
            {!loading && showEmpty && (
                <tr>
                    <td colSpan={columns.length}>{emptyRender()}</td>
                </tr>
            )}
            {!loading &&
                !showEmpty &&
                data.map((row, rowIndex) => {
                    const rowKey = `table-header-row-${rowIndex}`;
                    return (
                        <tr key={rowKey}>
                            {columns.map((column, cellIndex) => {
                                const cellKey = `table-header-cell-${rowIndex}-${cellIndex}`;
                                const cellVal = _get(row, column.dataKey);
                                const { width } = column;
                                const cell =
                                    typeof column.render === 'function'
                                        ? column.render(cellVal, row, rowIndex)
                                        : cellVal;
                                return (
                                    <td key={cellKey} width={width}>
                                        {cell}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
        </tbody>
    );
};

TableBody.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    emptyRender: PropTypes.func.isRequired,
    fixedHeader: PropTypes.bool.isRequired,
    height: PropTypes.number,
    loading: PropTypes.bool.isRequired
};

export default TableBody;
