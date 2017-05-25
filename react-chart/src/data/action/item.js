import axios from 'axios';
import {
  BUKALAPAK_KEY_ID,
  BUKALAPAK_KEY_VALUE
} from '../../env/key'
export const SEED_ITEM = 'SEED_ITEM'
export const SEARCH_ITEM = 'SEARCH_ITEM'

export function seeditemSuccess(value) {
  return {
    type: SEED_ITEM,
    value
  }
}
export function searchitem(value) {
  return {
    type: SEARCH_ITEM,
    value
  }
}
export function seeditem() {
  return dispatch => {
    return axios.get('http://localhost:8000/db/1')
      .then(function(response) {
        if (response.data.status === 'false') {
          axios.get('https://api.bukalapak.com/v2/products.json?sort_by=Terbaru&conditions=new&nego=false&top_seller=1', {
              headers: {
                BUKALAPAK_KEY_ID: BUKALAPAK_KEY_VALUE
              }
            })
            .then(function(response) {
              axios.put('http://localhost:8000/db/1', {
                status: 'true'
              }).then(function(responses) {
                let arr = [];
                for (var i = 1; i <= 11; i++) {
                  axios.post('http://localhost:8000/listitem', {
                    seller_username: response.data.products[i].seller_username,
                    seller_level: response.data.products[i].seller_level,
                    seller_avatar: response.data.products[i].seller_avatar,
                    images: response.data.products[i].images[0],
                    name: response.data.products[i].name,
                    price: response.data.products[i].price
                  })
                }
              })
            })
        } else {
          axios.get('http://localhost:8000/listitem').then(function(response) {
          dispatch(seeditemSuccess(response.data))
          })
        }
      })
  }
}
