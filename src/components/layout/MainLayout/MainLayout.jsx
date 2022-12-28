import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  min-height: calc(100vh - 56px);
  background-color: ${props => props.background};
  transition: background 0.5s ease-in-out;
  padding: 2rem;
`;

const MainLayout = ({background, children}) => {
  const layoutColor = background === 'primary' ? '#F8F9FA' : '#353b48';
  return <Div background={layoutColor}>{children}</Div>;
};

MainLayout.propTypes = {
  background: PropTypes.node,
  children: PropTypes.node,
};

import {connect} from 'react-redux';

const mapStateToProps = state => ({
  background: state.theme.background,
});

export default connect(mapStateToProps)(MainLayout);


