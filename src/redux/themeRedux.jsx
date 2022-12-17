// selectors

// action name creator
const reducerName = 'theme';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const TOGGLE_THEME = createActionName('TOGGLE_THEME');

// action creators
export const createActionToggleTheme = () => ({
  type: TOGGLE_THEME,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...statePart,
        background: statePart.background === 'primary' ? 'dark' : 'primary',
      };
    default:
      return statePart;
  }
}
