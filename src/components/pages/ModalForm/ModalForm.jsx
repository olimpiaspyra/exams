import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, Form} from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ModalForm = ({show, onHide, title, exam}) => {
  const [examData, setExamData] = useState(exam);
  const [validated, setValidated] = useState(false);

  const handleGrade = e => {
    setExamData({...examData, grade: e.target.value});
  };

  const handleSubmit = e => {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop='static'
      size='lg'
      centered
      aria-labelledby='contained-modal-title-vcenter'
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Subject</Form.Label>
            <Form.Control type='text' required minLength='5' maxLength='50' />
            <Form.Control.Feedback type='invalid'>
              The field must be at least 5 - 50 characters long.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Teacher</Form.Label>
            <Form.Control type='text' required minLength='5' maxLength='50' />
            <Form.Control.Feedback type='invalid'>
              The field must be at least 5 - 50 characters long.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Unit</Form.Label>
            <Form.Control type='text' required minLength='5' maxLength='50' />
            <Form.Control.Feedback type='invalid'>
              The field must be at least 5 - 50 characters long.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Tasks</Form.Label>
            <Form.Control
              as='textarea'
              rows='2'
              required
              minLength='15'
              maxLength='100'
            />
            <Form.Control.Feedback type='invalid'>
              The field must be at least 15 - 100 characters long.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Grade</Form.Label>
            <Form.Control as='select' onChange={handleGrade} value={examData.grade}>
              <option value='none'>None</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label className='mr-3'>Date</Form.Label>
            <DatePicker
              selected={examData.date}
              onChange={date => setExamData({...exam, date})}
              dateFormat='dd.MM.yyyy'
            />
          </Form.Group>
          <Form.Group className='d-flex justify-content-end'>
            <Button variant='secondary' className='mr-4' onClick={onHide}>
              Cancel
            </Button>
            <Button variant='primary' type='submit'>
              Save
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

ModalForm.defaultProps = {
  exam: {
    id: uuidv4(),
    teacher: '',
    subject: '',
    unit: '',
    tasks: '',
    grade: '',
    date: new Date(),
  },
};

ModalForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  exam: PropTypes.object.isRequired,
};

export default ModalForm;
