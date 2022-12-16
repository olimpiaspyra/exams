import {connect} from 'react-redux';

import MainLayout from './MainLayout';

const mapStateToProps = state => ({
  background: state.theme.background,
});

export default connect(mapStateToProps)(MainLayout);
