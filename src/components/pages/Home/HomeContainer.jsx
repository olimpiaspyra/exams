import {connect} from 'react-redux';

import Home from './Home';

const mapStateToProps = state => ({
  exams: state.exams,
});

export default connect(mapStateToProps)(Home);
