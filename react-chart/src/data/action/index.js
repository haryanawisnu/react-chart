import axios from 'axios';
import {BUKALAPAK_KEY_ID,BUKALAPAK_KEY_VALUE} from '../../env/key'
export const SEED_ITEM = 'SEED_ITEM'

export function seeditemSuccess(value) {
  return { type: SEED_ITEM, value }
}
export function seeditem() {
  return dispatch=>{
    return axios.get('https://api.bukalapak.com/v2/products.json?sort_by=Terbaru&conditions=new&nego=false&top_seller=1', {
      headers: {
        BUKALAPAK_KEY_ID: BUKALAPAK_KEY_VALUE
      }
    })
    .then(function(response) {
      let arr=[];
      for (var i = 1; i <= 10; i++) {
      arr.push(response.data.products[i]);
      }
      dispatch(seeditemSuccess(arr))
    })
    .catch(function(error) {
      console.log(error);
    });
  }
}
