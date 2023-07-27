import { filterInitState } from './filter.init-state';
import { FILTER_CONTACTS } from './filter.types';

export const filterReducer = (state = filterInitState, action) => {
  switch (action.type) {
    case FILTER_CONTACTS:
      return action.payload;
    default:
      return state;
  }
};
