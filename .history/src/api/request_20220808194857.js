import axios from 'axios';


const timeout = 10000;
const source = axios.CancelToken.source();

// create an axios instance
const service = axios.create({
  withCredentials: true, // send cookies when cross-domain requests
  timeout, // request timeout
  cancelToken: source.token, // 全局添加 cancelToken
});

// 拦截添加定位header
service.interceptors.request.use(
  async (config) => {
    const axiosconf = config;

    return axiosconf;
  },
  (err) => Promise.reject(err),
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    // const res = response.data;
    // const config = response.config;
    const { data, config } = response;

    if (config.needLogin) {
      // 登录失效-3
      if (data.ppucode === -3 || data.status === '-3') {
        source.cancel(); // 取消其他正在进行的请求
        // 先退出后登录
        logout(() => {
          login(() => {
            reload();
          });
        });
      }
    }

    // if the custom status is not '0', it is judged as an error.
    if (data.status !== 0 && data.status !== '0') {
      // 异常提示
      // config.message && Toast(data.msg || 'Error');

      return Promise.reject(new Error(data.msg || 'Error'));
    }

    return data.result;
  },
  (error) => {
    console.log(error); // for debug

    if (axios.isCancel(error)) {
      // 取消请求的情况下，终端Promise调用链
      return new Promise(() => {});
    }

    return Promise.reject(error);
  },
);

export default service;
