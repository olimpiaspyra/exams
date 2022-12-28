import {connect} from 'react-redux';

import {
  createActionAddFilter,
  createActionCleanFilter,
} from '../../../redux/filtersRedux';
import Menu from './Menu';

const mapStateToProps = state => ({
  filters: state.filters,
});
const mapDispatchToProps = dispatch => ({
  addFilter: filter => dispatch(createActionAddFilter(filter)),
  cleanFilter: () => dispatch(createActionCleanFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
