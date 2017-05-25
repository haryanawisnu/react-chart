import {ADD_CHART,UPDATE_CHART ,SEED_CHART,DELETE_CHART} from '../action/chart'

const initialState = {
  list_chart:[]
}

function Chart(state = initialState, action) {
  switch (action.type) {
    case SEED_CHART:
      return Object.assign({}, state, {list_chart: action.value})
    case DELETE_CHART:
      return Object.assign({}, state, {list_chart: [
        ...state.list_chart.slice(0, action.index),
        ...state.list_chart.slice(action.index + 1)
    ]})
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
