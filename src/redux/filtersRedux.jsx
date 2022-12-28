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

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_FILTER = createActionName('ADD_FILTER');
export const DELETE_FILTER = createActionName('DELETE_FILTER');
export const CLEAN_FILTER = createActionName('CLEAN_FILTER');

// action creators
export const createActionAddFilter = payload => ({payload, type: ADD_FILTER});
export const createActionDeleteFilter = payload => ({payload, type: DELETE_FILTER});
export const createActionCleanFilter = () => ({type: CLEAN_FILTER});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_FILTER:
      return [...statePart, action.payload];
    case DELETE_FILTER:
      console.log(statePart, action.payload);
      return [...statePart.filter(filter => filter !== action.payload)];
    case CLEAN_FILTER:
      return [];
    default:
      return statePart;
  }
}
