import id from 'uuid/v4';
import * as R from 'ramda';

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
      const newIndex = state.currentIndex + 1;
      const newGrudgesState = state.grudgesState.filter(
        (_, i) => i < state.currentIndex
      );
      const newState = R.mergeLeft(
        {
          grudgesState: [
            ...newGrudgesState,
            [
              ...newGrudgesState[state.currentIndex - 1],
              { id: id(), forgiven: false, ...data }
            ]
          ],
          currentIndex: newIndex
        },
        state
      );
      return newState;
    }
    case UPDATE_GRUDGE: {
      const newIndex = state.currentIndex + 1;
      const newGrudgesState = state.grudgesState.filter(
        (_, i) => i < state.currentIndex
      );
      const lastGrudges = R.clone(newGrudgesState[state.currentIndex - 1]);

      return R.mergeLeft(
        {
          grudgesState: [
            ...newGrudgesState,
            lastGrudges.map((grudge) => {
              if (grudge.id === data.id) grudge.forgiven = !grudge.forgiven;
              return grudge;
            })
          ],
          currentIndex: newIndex
        },
        state
      );
    }
    case UNDO_GRUDGE: {
      if (state.currentIndex > 0) {
        return R.mergeLeft(
          {
            currentIndex: state.currentIndex - 1
          },
          state
        );
      } else return state;
    }
    case REDO_GRUDGE: {
      if (state.currentIndex < state.grudgesState.length) {
        return R.mergeLeft(
          {
            currentIndex: state.currentIndex + 1
          },
          state
        );
      } else return state;
    }
    default:
      return state;
  }
};
