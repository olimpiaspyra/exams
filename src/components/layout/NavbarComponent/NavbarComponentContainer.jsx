import {connect} from 'react-redux';

import {createActionToggleTheme} from '../../../redux/themeRedux';
import NavbarComponent from './NavbarComponent';

const mapStateToProps = state => ({
  background: state.theme.background,
});
const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(createActionToggleTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
