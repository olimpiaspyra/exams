import React from 'react';
import {ButtonGroup, Button, DropdownButton, Dropdown} from 'react-bootstrap';
import PropTypes from 'prop-types';


const Menu = ({filters, addFilter, cleanFilter}) => {
  const handleFilter = filter => {
    if (filter === 'all') {
      return cleanFilter();
    }
    if (filters.indexOf(filter) === -1) {
      return addFilter(filter);
    }
  };

  return (
    <ButtonGroup className='mb-5'>
      <Button variant='warning text-monospace fw-bold text-uppercase'>New exam</Button>
      <DropdownButton
        as={ButtonGroup}
        title='Filter'
        id='bg-vertical-dropdown-2'
        variant='outline-warning text-monospace fw-bold text-uppercase'
        onSelect={e => handleFilter(e)}
      >
        <Dropdown.Item eventKey='all'>All</Dropdown.Item>
        <Dropdown.Item eventKey='future'>Future</Dropdown.Item>
        <Dropdown.Item eventKey='unrated'>Unrated</Dropdown.Item>
        <Dropdown.Item eventKey='failed'>Failed</Dropdown.Item>
        <Dropdown.Item eventKey='passed'>Passed</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        title='Sort'
        id='bg-vertical-dropdown-2'
        variant='outline-warning text-monospace fw-bold text-uppercase'
      >
        <Dropdown.Item eventKey='date'>Date</Dropdown.Item>
        <Dropdown.Item eventKey='subject'>Subject</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
  );
};

Menu.propTypes = {
  filters: PropTypes.array,
  addFilter: PropTypes.func,
  cleanFilter: PropTypes.func,
};

export default Menu;
