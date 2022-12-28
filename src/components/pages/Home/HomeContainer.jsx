import {connect} from 'react-redux';

import {getFilteredExams} from '../../../redux/filtersRedux';

import Home from './Home';

const mapStateToProps = state => ({
  // exams: state.exams,
  exams: getFilteredExams(state),
});

export default connect(mapStateToProps)(Home);
