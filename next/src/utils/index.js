import axios from 'axios';

export const fetcher = (url) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err.message);
      throw err;
    });