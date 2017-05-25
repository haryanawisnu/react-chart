import { SEED_ITEM } from '../action/item'

const initialState = {
  list_item: []
}

function Item(state = initialState, action) {
  switch (action.type) {
    case SEED_ITEM:
      return Object.assign({}, state, {list_item: action.value})
    default:
      return state
  }
}

export default Item
