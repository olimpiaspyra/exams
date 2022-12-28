import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const Div = styled.div`
  min-height: calc(100vh - 56px);
  background-color: ${props => props.background};
  transition: background 0.5s ease-in-out;
  padding: 2rem;
`;

const MainLayout = ({children}) => {
  const background = useSelector(state => state.theme.background);
  const layoutColor = background === 'primary' ? '#F8F9FA' : '#353b48';
  return <Div background={layoutColor}>{children}</Div>;
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
