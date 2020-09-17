import id from 'uuid/v4';

// constants
import { ADD_GRUDGE, UPDATE_GRUDGE } from '../constants.json';

export const grudgeActions = (state, { data, type }) => {
  switch (type) {
    case ADD_GRUDGE: {
      const newGrudges = [
        ...state.grudges,
        { id: id(), forgiven: false, ...data }
      ];
      return Object.assign({}, state, {
        grudges: newGrudges
      });
    }
    case UPDATE_GRUDGE: {
      const updatedGrudges = state.grudges.map((grudge) => {
        if (grudge.id === data.id) {
          grudge.forgiven = !grudge.forgiven;
        }
        return grudge;
      });
      return Object.assign({}, state, {
        grudges: updatedGrudges
      });
    }
    default:
      return state;
  }
};
