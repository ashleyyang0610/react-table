import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles/index.styl';

const Pagination = ({
    className,
    onPageChange,
    page,
    pageLength,
    prevPageRenderer,
    nextPageRenderer,
    lastPageRenderer,
    firstPageRenderer,
    ...props
}) => {
    const btnConfig = [
        {
            key: 'first-page',
            isDisabled: page === 1,
            onClick: () => {
                onPageChange(1);
            },
            render: firstPageRenderer()
        },
        {
            key: 'prev-page',
            isDisabled: page === 1,
            onClick: () => {
                onPageChange(page - 1);
            },
            render: prevPageRenderer()
        },
        {
            key: 'next-page',
            isDisabled: page === pageLength,
            onClick: () => {
                onPageChange(page + 1);
            },
            render: nextPageRenderer()
        },
        {
            key: 'last-page',
            isDisabled: page === pageLength,
            onClick: () => {
                onPageChange(pageLength);
            },
            render: lastPageRenderer()
        }
    ];

    return (
        <div {...props} className={cx(styles.pagination, className)}>
            {btnConfig.map(config => (
                <button
                    key={config.key}
                    type="button"
                    disabled={config.isDisabled}
                    onClick={config.onClick}
                >
                    {config.render}
                </button>
            ))}
        </div>
    );
};

Pagination.defaultProps = {
    prevPageRenderer: () => 'Prev',
    nextPageRenderer: () => 'Next',
    lastPageRenderer: () => 'Last',
    firstPageRenderer: () => 'First'
};

Pagination.propTypes = {
    /**
     * Action dispatched when page onchnage.
     */
    onPageChange: PropTypes.func.isRequired,
    /**
     * Current page.
     */
    page: PropTypes.number.isRequired,
    /**
     * Total page length.
     */
    pageLength: PropTypes.number.isRequired,
    /**
     * Content renderer in "previous" page button.
     */
    prevPageRenderer: PropTypes.func,
    /**
     * Content renderer in "next page" button.
     */
    nextPageRenderer: PropTypes.func,
    /**
     * Content renderer in "last page" button.
     */
    lastPageRenderer: PropTypes.func,
    /**
     * Content renderer in "first page" button.
     */
    firstPageRenderer: PropTypes.func
};

export default Pagination;
