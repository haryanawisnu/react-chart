import { SEED_ITEM,SEARCH_ITEM } from '../action/item'

const initialState = {
  list_item: []
}

function Item(state = initialState, action) {
  switch (action.type) {
    case SEED_ITEM:
      return Object.assign({}, state, {list_item: action.value})
    case SEARCH_ITEM:
      let filtering = new RegExp(`${action.value}.*`);
      console.log('fil',filtering);
      let result=state.list_item.filter(item=>{
                    return filtering.test(item.name.toLowerCase())
                  })
                  console.log('res',result);
      return Object.assign({}, state, {list_item: result})
    default:
      return state
  }
}

export default Item
