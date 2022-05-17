export default function ourReducerFunction(state, action) {
  switch (action.type) {
    case 'changeSize':
      return {
        ...state,
        size: action.value
      }
    case 'incrementLikes':
      return {
        ...state,
        likes: state.likes + 1
      }
    case 'decrementLikes':
      if (state.likes > 0) {
        return {
          ...state,
          likes: state.likes - 1
        }
      } else {
        return state
      }
    case 'changeColor':
      return {
        ...state,
        color: action.value
      }
    case 'changeColorAndSize':
      return { ...state, color: action.value.color, size: action.value.size }
    default:
      return state
  }
}
