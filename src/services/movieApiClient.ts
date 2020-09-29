import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  baseURL,
  resource,
  logRequest,
  logResponse,
} from '@/services/movie.api.config';

export class MovieApiClient {
  private resource = '';

  constructor() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = baseURL;
    this.resource = resource;
    if (logRequest) {
      Vue.axios.interceptors.request.use((request) => {
        console.log('Request', request);
        return request;
      });
    }
    if (logResponse) {
      Vue.axios.interceptors.response.use((response) => {
        console.log('Response', response);
        return response;
      });
    }
  }

  query(params: URLSearchParams) {
    return Vue.axios.get(this.resource, { params }).catch((error) => {
      console.error(error);
      throw new Error(`MovieApiService ${error}`);
    });
  }

  get(id: number) {
    return Vue.axios.get(`${this.resource}/${id}`).catch((error) => {
      throw new Error(`MovieApiService ${error}`);
    });
  }
}
