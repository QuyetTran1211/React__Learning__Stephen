// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    case 'ADD_POSTS':
      return [...state, action.payload];
    default:
      return state;
  }
};
