// selectors

// actions
const createActionName = actionName => `app/theme/${actionName}`;
export const TOGGLE_THEME = createActionName('TOGGLE_THEME');

// action creators
export const createActionToggleTheme = () => ({
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
