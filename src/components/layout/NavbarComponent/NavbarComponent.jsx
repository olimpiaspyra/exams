import React from 'react';
import {Navbar, Nav, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const NavbarComponent = props => {
  const {background, toggleTheme} = props;
  console.log('!', background);
  return (
    <Navbar
      collapseOnSelect
      expand='md'
      bg={background}
      variant='dark'
      className='shadow'
    >
      <Form className='mx-2'>
        <Form.Check
          className={`bg-${background}`}
          type='switch'
          id='custom-switch'
          label=''
          onClick={toggleTheme}
        />
      </Form>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
        <Nav>
          <Link className='mx-2 my-2 text-light' to='/'>
            Home
          </Link>
          <Link className='mx-2 my-2 text-light' to='/subjects'>
            Subjects
          </Link>
          <Link className='mx-2 my-2 text-light' to='/about'>
            About
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavbarComponent.propTypes = {
  background: PropTypes.string,
  toggleTheme: PropTypes.func,
};

export default NavbarComponent;
