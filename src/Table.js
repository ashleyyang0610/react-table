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
    height,
    showEmpty,
    theme,
    loading,
    fixedHeader,
    width,
    ...props
}) => {
    const context = {
        theme
    };

    return (
        <TableContext.Provider value={context}>
            <TableWrapper
                {...props}
                width={width}
                className={cx(
                    styles.table,
                    styles[`table--${theme}`],
                    className
                )}
            >
                <TableHeader columns={columns} />
                <TableBody columns={columns} data={data} />
            </TableWrapper>
        </TableContext.Provider>
    );
};

Table.defaultProps = {
    theme: 'dark'
};

Table.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    emptyRender: PropTypes.func,
    height: PropTypes.number,
    showEmpty: PropTypes.bool,
    theme: PropTypes.oneOf(['dark', 'light']),
    loading: PropTypes.bool,
    fixedHeader: PropTypes.bool,
    width: PropTypes.string.isRequired
};

export default Table;
