// selectors

// action name creator
const reducerName = 'filers';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_FILTER = createActionName('ADD_FILTER');
export const DELETE_FILTER = createActionName('DELETE_FILTER');
export const CLEAR_FILTER = createActionName('CLEAR_FILTER');

// action creators
export const createActionAddFilter = payload => ({payload, type: ADD_FILTER});
export const createActionDeleteFilter = payload => ({payload, type: DELETE_FILTER});
export const createActionClearFilter = () => ({type: CLEAR_FILTER});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...statePart,
        filters: [...statePart, action.payload],
      };
    case DELETE_FILTER:
      return {
        ...statePart,
        filters: statePart.filters.filter(filter => filter !== action.payload),
      };
    case CLEAR_FILTER:
      return {
        ...statePart,
        filters: [],
      };
    default:
      return statePart;
  }
}
