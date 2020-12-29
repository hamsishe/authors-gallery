import { appActionsType } from '../constans';

const initState = {
  authorsList: [],
};

const authorsReducer = (state = initState, action) => {
  switch (action.type) {
    case appActionsType.GET_ALL_AUTHORS:
      return {
        ...state,
        authorsList: action.authorsList,
      };

    default:
      return state;
  }
};

export default authorsReducer;
