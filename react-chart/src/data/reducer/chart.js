import {ADD_CHART,UPDATE_CHART ,SEED_CHART} from '../action/chart'

const initialState = {
  list_chart:[]
}

function Chart(state = initialState, action) {
  switch (action.type) {
    case SEED_CHART:
      return Object.assign({}, state, {list_chart: action.value})
    case ADD_CHART:
      return {
        ...state,
        list_chart: [...state.list_chart, action.value]
    }
    case UPDATE_CHART:
      return Object.assign({}, state, {list_chart: state.list_chart.map( (item, index) => {
        if(index !== action.index) {
            return item;
        }
        return {
            ...action.item
        };
      })
    })
    default:
      return state
  }
}

export default Chart
