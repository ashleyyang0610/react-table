import { Fragment } from 'react';
import _capitalize from 'lodash/capitalize';
import _orderBy from 'lodash/orderBy';
import Table from '../src';

global.Fragment = Fragment;
global.Table = Table;
global._capitalize = _capitalize;
global._orderBy = _orderBy;
