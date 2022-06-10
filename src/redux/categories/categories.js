// Action
const CHECKSTATUS = 'categories/reducerCategories/CHECKSTATUS';
const categories = [];

// Reducer
export default function reducerCategories(state = categories, action = {}) {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under Construction';
    default:
      return state;
  }
}

// Action Creation
export function checkStatus() {
  return { type: CHECKSTATUS };
}
