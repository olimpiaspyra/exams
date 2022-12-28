import {getExamStatus} from '../utils/examStatus';

// selectors

export const getFilteredExams = ({exams, filters}) => {
  if (filters.length === 0) {
    return exams;
  }
  return exams.filter(exam => {
    const {grade, date} = exam;
    const status = getExamStatus(grade, date);
    if (filters.includes(status)) return exam;
  });
};

// actions
const createActionName = actionName => `app/filters/${actionName}`;
const ADD_FILTER = createActionName('ADD_FILTER');
const DELETE_FILTER = createActionName('DELETE_FILTER');
const CLEAN_FILTER = createActionName('CLEAN_FILTER');

// action creators
export const addFilter = payload => ({payload, type: ADD_FILTER});
export const deleteFilter = payload => ({payload, type: DELETE_FILTER});
export const cleanFilter = () => ({type: CLEAN_FILTER});

// reducer
const filtersReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_FILTER:
      return [...statePart, action.payload];
    case DELETE_FILTER:
      console.log('state', statePart, 'action', action.payload);
      return statePart.filter(filter => filter !== action.payload);
    case CLEAN_FILTER:
      return [];
    default:
      return statePart;
  }
};

export default filtersReducer;
