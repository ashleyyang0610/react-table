import { Fragment } from 'react';
import _capitalize from 'lodash/capitalize';
import _orderBy from 'lodash/orderBy';
import Table, { Pagination } from '../src';
import './examples/index.css';

global.Fragment = Fragment;
global.Pagination = Pagination;
global.Table = Table;
global._capitalize = _capitalize;
global._orderBy = _orderBy;
