import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableContext from './context';
import styles from './index.styl';

const TableWrapper = ({ children, showWrapper, height }) => {
    if (showWrapper) {
        return (
            <div
                style={{
                    height: `${height}px`,
                    overflowY: 'auto'
                }}
            >
                {children}
            </div>
        );
    } else {
        return <>{children}</>;
    }
};

const Table = ({
    className,
    columns,
    data,
    emptyRender,
    fixedHeader,
    height,
    hoverable,
    loading,
    theme,
    width,
    ...props
}) => {
    const context = {
        theme
    };
    const [tableBodyScrollStatus, setTableBodyScrollStatus] = useState(false);
    const [scrollbarWidth, setTableScrollbarWidth] = useState(0);
    const [lastTdWidth, setLastTdWidth] = useState(0);
    const headerColumns = columns.slice();

    const emptyTableClass = data.length === 0 ? styles['table--empty'] : '';
    const fixedHeaderClass = fixedHeader ? styles['table--fixed-header'] : '';
    const hoverableTableClass = hoverable ? styles['table--hoverable'] : '';
    const loadingTableClass = loading ? styles['table--loading'] : '';

    const tableHeightStyles = height && !fixedHeader ? {} : {};

    if (fixedHeader && tableBodyScrollStatus) {
        const newColumn = {
            ...columns[columns.length - 1],
            width: columns.width
                ? columns.width + scrollbarWidth
                : lastTdWidth + scrollbarWidth
        };

        headerColumns.splice(columns.length - 1, 1, newColumn);
    }

    return (
        <TableContext.Provider value={context}>
            <TableWrapper height={height} showWrapper={height && !fixedHeader}>
                <table
                    {...props}
                    width={width ? `${width}px` : '100%'}
                    style={tableHeightStyles}
                    className={`${cx(
                        styles.table,
                        styles[`table--${theme}`],
                        emptyTableClass,
                        fixedHeaderClass,
                        hoverableTableClass,
                        loadingTableClass
                    )} ${className}`}
                >
                    <TableHeader
                        columns={headerColumns}
                        lastTdWidth={lastTdWidth}
                        tableBodyScrollStatus={tableBodyScrollStatus}
                    />
                    <TableBody
                        columns={columns}
                        data={data}
                        emptyRender={emptyRender}
                        fixedHeader={fixedHeader}
                        height={height}
                        loading={loading}
                        setLastTdWidth={setLastTdWidth}
                        setTableBodyScrollStatus={setTableBodyScrollStatus}
                        setTableScrollbarWidth={setTableScrollbarWidth}
                    />
                </table>
            </TableWrapper>
        </TableContext.Provider>
    );
};

Table.defaultProps = {
    emptyRender: () => 'No data',
    fixedHeader: false,
    hoverable: true,
    loading: false,
    theme: 'light'
};

Table.propTypes = {
    /**
     * The columns config of table.
     */
    columns: PropTypes.array.isRequired,
    /**
     * Data record array to be rendered.
     */
    data: PropTypes.array.isRequired,
    /**
     * Empty content render function.
     */
    emptyRender: PropTypes.func,
    /**
     * Whether table head is fixed.
     */
    fixedHeader: PropTypes.bool,
    /**
     * The height of the table.
     */
    height: PropTypes.number,
    /**
     * Whether use row hover style.
     */
    hoverable: PropTypes.bool,
    /**
     * Whether table is loading.
     */
    loading: PropTypes.bool,
    /**
     * Type of table theme.
     */
    theme: PropTypes.oneOf(['dark', 'light']),
    /**
     * The width of the table.
     */
    width: PropTypes.number
};

export default Table;
