import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Card, Col} from 'react-bootstrap';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';

import {getBackgroundCard} from '../../../utils/cardBackground';
import {formatDate} from '../../../utils/date';

const ExamCard = ({exam}) => {
  const {id, subject, unit, tasks, teacher, date, grade} = exam;

  return (
    <Fragment>
      <Col sm={6} lg={4} xl={3}>
        <Card
          className='mb-4 text-light shadow-lg'
          onClick={() => console.log(id)}
          bg={getBackgroundCard(grade, date)}
        >
          <Card.Header>
            <Card.Title className='text-uppercase'>{subject}</Card.Title>
            <Card.Subtitle className='text-capitalize'>{teacher}</Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Card.Text className='text-capitalize'>{unit}</Card.Text>
            <small className='text-capitalize'>{tasks}</small>
          </Card.Body>
          <Card.Footer className='d-flex justify-content-between'>
            <small>{formatDate(date)}</small>
            {grade && (
              <div>
                {new Array(6)
                  .fill(0)
                  .map((_, i) => i + 1)
                  .map(starNumber =>
                    starNumber <= grade ? (
                      <AiFillStar key={starNumber} />
                    ) : (
                      <AiOutlineStar key={starNumber} />
                    )
                  )}
                <small className='ml-1'>({grade})</small>
              </div>
            )}
          </Card.Footer>
        </Card>
      </Col>
    </Fragment>
  );
};

ExamCard.propTypes = {
  exam: PropTypes.object,
  getBackgroundCard: PropTypes.func,
};

export default ExamCard;
