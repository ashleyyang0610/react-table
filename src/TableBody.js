import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _get from 'lodash.get';
import Loader from './Loader';
import styles from './styles/index.styl';

const TableBody = ({
    columns,
    data,
    emptyRender,
    fixedHeader,
    height,
    loading,
    setLastTdWidth,
    setTableBodyScrollStatus,
    setTableScrollbarWidth,
    ...props
}) => {
    const tableBodyRef = useRef();
    const lastTdRef = useRef();

    useEffect(() => {
        if (!!tableBodyRef && tableBodyRef.current) {
            const tableBodyScrollStatus =
                tableBodyRef.current.offsetHeight <
                tableBodyRef.current.scrollHeight;
            const scrollbarWidth =
                tableBodyRef.current.parentNode.clientWidth -
                tableBodyRef.current.clientWidth;
            setTableScrollbarWidth(scrollbarWidth);
            setTableBodyScrollStatus(tableBodyScrollStatus);

            if (!!lastTdRef && lastTdRef.current) {
                setLastTdWidth(lastTdRef.current.getBoundingClientRect().width);
            }
        }
    }, [columns, data, emptyRender, fixedHeader, height, loading, props]);

    const showEmpty = data.length === 0;

    return (
        <tbody
            ref={tableBodyRef}
            style={{ height: fixedHeader ? `${height - 37}px` : null }}
        >
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
                    return (
                        <tr key={row.uuid}>
                            {columns.map((column, cellIndex) => {
                                const cellKey = `table_cell__${cellIndex}`;
                                const cellVal = _get(row, column.dataKey);
                                const { width } = column;
                                const cell =
                                    typeof column.render === 'function'
                                        ? column.render(cellVal, row, rowIndex)
                                        : cellVal;
                                return (
                                    <td
                                        ref={
                                            rowIndex === data.length - 1 &&
                                            cellIndex === columns.length - 1
                                                ? lastTdRef
                                                : undefined
                                        }
                                        key={cellKey}
                                        width={width}
                                    >
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
    setLastTdWidth: PropTypes.func.isRequired,
    setTableBodyScrollStatus: PropTypes.func.isRequired,
    setTableScrollbarWidth: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

export default TableBody;
