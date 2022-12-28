import React from 'react';
import {Container, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import MainLayout from '../../layout/MainLayout/MainLayout';
import ExamCard from '../../layout/ExamCard/ExamCard';
import Menu from '../../layout/Menu/Menu';
import Filters from '../../layout/Filters/Filters';
import {getFilteredExams} from '../../../redux/filtersReducer';

const Home = () => {
  const exams = useSelector(state => getFilteredExams(state));

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

export default Home;
