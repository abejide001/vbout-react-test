export default function reducer(state, action) {
    switch (action.type) {
        case "set-grudge":
            let _g = [action.grudge, ...state.grudges]
            let _h = [...state.history]
            _h.splice(state.hIndex + 1, 0, { grudges: _g })
            return {
                ...state,
                grudges: _g,
                hIndex: state.hIndex + 1,
                history: _h,
            }
        case "toggle-forgiveness":
            let grudges = state.grudges.map((grudge) => grudge.id === action.id ? { ...grudge, forgiven: !grudge.forgiven } : grudge)
            return {
                ...state,
                hIndex: state.hIndex + 1,
                grudges: grudges, history: [...state.history, { grudges }],
            }
        case 'undo': {
            if (state.hIndex < 1)
                return state
            return {
                ...state,
                hIndex: state.hIndex - 1,
            }
        }
        case 'redo': {
            if (state.hIndex >= state.history.length - 1)
                return state
            return {
                ...state,
                hIndex: state.hIndex + 1,
            }
        }
        default:
            return state
    }
}
