import axios from 'axios';

axios.defaults.baseURL = 'https://cardle-server-nau7apa67q-uc.a.run.app';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export const api = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
