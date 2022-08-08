import request from './request';

// 获取问题信息
export function getQuestions() {
  return request({
    url: '/config/getConfigByKey?configKey=appScoreProposeType',
    method: 'get',
  });
}

/**
 * 评价保存
 * appScore/badReviewSave
 * http://lbgapi.58corp.com/#/view/aXYlwE8r
 */
export function saveReview(data) {
  return request
    .post('//daojiajx.58.com/appScore/badReviewSave', {
      ...data,
    })
    .then((res) => res);
}

/**
 * axios post 附件上传 图片上传请求封装
 * @param {String} url
 * @param {Object} formData
 * @param {Object} config
 */
export function uploadImg(url, formData, config = {}) {
  return request
    .post(url, formData, {
      ...{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
      ...config,
    })
    .then((res) => res);
}
