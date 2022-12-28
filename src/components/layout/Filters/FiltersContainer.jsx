import {connect} from 'react-redux';

import {createActionDeleteFilter} from '../../../redux/filtersRedux';
import Filters from './Filters';

const mapStateToProps = state => ({
  filters: state.filters,
});
const mapDispatchToProps = dispatch => ({
  deleteFilter: filter => dispatch(createActionDeleteFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
