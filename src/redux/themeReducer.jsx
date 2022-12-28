// selectors

// actions
const createActionName = actionName => `app/theme/${actionName}`;
const TOGGLE_THEME = createActionName('TOGGLE_THEME');

// action creator
export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

// reducer
const themeReducer = (statePart = {}, action = {}) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...statePart,
        background: statePart.background === 'primary' ? 'dark' : 'primary',
      };
    default:
      return statePart;
  }
};

export default themeReducer;
