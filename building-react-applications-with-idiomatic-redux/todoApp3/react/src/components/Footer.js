import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter='all'>
      All
    </FilterLink>
    {' '}
    <FilterLink filter='active'>
      Active
    </FilterLink>
    {' '}
    <FilterLink filter='completed'>
      Completed
    </FilterLink>
  </p>
);

// {' '} just adds a space between filter buttons

export default Footer;
