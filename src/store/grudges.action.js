import id from 'uuid/v4';

// constants
import {
  ADD_GRUDGE,
  UPDATE_GRUDGE,
  UNDO_GRUDGE,
  REDO_GRUDGE
} from '../constants.json';

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
    case UNDO_GRUDGE: {
      // TODO
    }
    case REDO_GRUDGE: {
      // TODO
    }
    default:
      return state;
  }
};
