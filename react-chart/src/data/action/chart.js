import axios from 'axios';
export const ADD_CHART = 'ADD_CHART'
export const UPDATE_CHART = 'UPDATE_CHART'
export const SEED_CHART = 'SEED_CHART'
export const DELETE_CHART = 'DELETE_CHART'

export function seedchartsuccess(value) {
  return {
    type: SEED_CHART,
    value
  }
}

export function seedchart() {
  return dispatch => {
    return axios.get('http://localhost:8000/chart')
      .then(function(response) {
          dispatch(seedchartsuccess(response.data))
      })
  }
}
export function addchartsuccess(value) {
  return {
    type: ADD_CHART,
    value
  }
}
export function updatechartsuccess(obj) {
  return {
    type: UPDATE_CHART,
    item:obj.data,
    index:obj.index
  }
}
export function addchart(data) {
  return dispatch => {
    return axios.post('http://localhost:8000/chart', {
            id:data.id,
            name:data.name,
            qty:1,
            price:data.price
          }).then(function(response) {
              dispatch(addchartsuccess(response.data))
          })
  }
}
export function updatechart(data) {
  return dispatch => {
    return  axios.put('http://localhost:8000/chart/'+data.id, {
            qty:data.qty,
            price:data.price,
            name:data.name
          }).then(function(response) {
              let obj={};
              obj.index=data.index;
              obj.data=response.data;
              dispatch(updatechartsuccess(obj))
          })
  }
}

export function deletechartsuccess(index) {
  return {
    type: DELETE_CHART,
    index
  }
}

export function deletechart(data) {
  return dispatch => {
    return axios.delete('http://localhost:8000/chart/'+data.id)
      .then(function(response) {
          dispatch(deletechartsuccess(data.index))
      })
  }
}
