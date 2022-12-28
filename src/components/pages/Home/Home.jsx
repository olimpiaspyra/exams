import React from 'react';
import {Container, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';

import MainLayout from '../../layout/MainLayout/MainLayout';
import ExamCard from '../../layout/ExamCard/ExamCard';
import Menu from '../../layout/Menu/Menu';
import Filters from '../../layout/Filters/Filters';

const Home = ({exams}) => {
  return (
    <MainLayout>
      <Container>
        <Menu />
        <Filters />
        <Row>
          {exams.map(exam => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </Row>
      </Container>
    </MainLayout>
  );
};

Home.propTypes = {
  exams: PropTypes.array,
};

import {connect} from 'react-redux';

import {getFilteredExams} from '../../../redux/filtersReducer';

const mapStateToProps = state => ({
  // exams: state.exams,
  exams: getFilteredExams(state),
});

export default connect(mapStateToProps)(Home);
