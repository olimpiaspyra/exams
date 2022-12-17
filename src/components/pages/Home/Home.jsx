import React from 'react';
import {Container, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';

import MainLayout from '../../layout/MainLayout/MainLayoutContainer';
import ExamCard from '../../layout/ExamCard/ExamCard';

const Home = ({exams}) => {
  return (
    <MainLayout>
      <Container>
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
