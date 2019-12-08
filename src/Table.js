import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableContext from './context';
import styles from './index.styl';

const TableWrapper = styled.table`
    table-layout: fixed;
    border-collapse: collapse;
`;

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

    const emptyTableClass = data.length === 0 ? styles['table--empty'] : '';
    const fixedHeaderClass = fixedHeader ? styles['table--fixed-header'] : '';
    const hoverableTableClass = hoverable ? styles['table--hoverable'] : '';
    const loadingTableClass = loading ? styles['table--loading'] : '';

    return (
        <TableContext.Provider value={context}>
            <TableWrapper
                {...props}
                width={width}
                className={cx(
                    styles.table,
                    styles[`table--${theme}`],
                    emptyTableClass,
                    fixedHeaderClass,
                    hoverableTableClass,
                    loadingTableClass,
                    className
                )}
            >
                <TableHeader columns={columns} />
                <TableBody
                    columns={columns}
                    data={data}
                    emptyRender={emptyRender}
                    fixedHeader={fixedHeader}
                    loading={loading}
                />
            </TableWrapper>
        </TableContext.Provider>
    );
};

Table.defaultProps = {
    emptyRender: () => 'No data',
    fixedHeader: false,
    height: 150,
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
    width: PropTypes.string.isRequired
};

export default Table;
