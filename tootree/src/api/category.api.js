import axios from 'axios';

export  function getcategory() {
    return axios.get('http://192.168.100.244:8000/v1/postcategories')
    .then(res => {
      return res.data
    })}
