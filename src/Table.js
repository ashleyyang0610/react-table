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

    const fixedHeaderClass = fixedHeader ? styles['table--fixed-header'] : '';
    const hoverableTableClass = hoverable ? styles['table--hoverable'] : '';

    return (
        <TableContext.Provider value={context}>
            <TableWrapper
                {...props}
                width={width}
                className={cx(
                    styles.table,
                    styles[`table--${theme}`],
                    fixedHeaderClass,
                    hoverableTableClass,
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
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    emptyRender: PropTypes.func,
    fixedHeader: PropTypes.bool,
    height: PropTypes.number,
    hoverable: PropTypes.bool,
    loading: PropTypes.bool,
    theme: PropTypes.oneOf(['dark', 'light']),
    width: PropTypes.string.isRequired
};

export default Table;
