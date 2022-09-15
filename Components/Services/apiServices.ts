import axios from 'axios';
import {useDispatch} from 'react-redux';
import * as Actions from '../store/actions';
const URL = 'http://206.189.140.26:7003/v1';

export const getCurrencylist = async () => {
  const dispatch = useDispatch();
  await axios
    .get(URL + '/getcurrency')
    .then(res => {
      dispatch(Actions.setRate(res.data));
    })
    .catch(err => console.warn(err));
};
// export const getCurrencyValue = async (resultunit: string, value: number) => {
//   await axios({
//     url: URL + '/convert',
//     method: 'POST',
//     data: JSON.stringify({base: 'USD', currency: resultunit, value: value}),
//   })
//     .then(res => {
//       response = res;
//     })
//     .catch(error => {
//       response.status = {status: error.response.status};
//     });
//   if (response.status === 200) {
//     return response.data[0].rate;
//   } else {
//     console.warn('API Error: ' + response.status);
//   }
// };
