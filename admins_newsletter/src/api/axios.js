import axios from 'axios';

// export default axios.create({
//     baseURL: ''
// });

const instance = axios.create({
    baseURL: "http://192.168.100.244:8000/v1/",
    timeout: 5000,
    headers: {
      "Content-type": "application/json"
    }
  });
  
  export default instance;
  