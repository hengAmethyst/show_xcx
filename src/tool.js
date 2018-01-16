import wepy from 'wepy';
import ApiUrl from './api-url';

export function genReqBody(param, token) {
  let body = {
    reqId: 0,
    channel: 31,
    os: '',
    ver: '',
    appVer: '',
    model: '',
    lng: '',
    lat: '',
    signType: '',
    sign: '',
    appId: 5,
    token,
    param
  };

  return body;
}

export const sleep = ts => new Promise(resolve => setTimeout(resolve, ts));

export function requestVerificationCode(phone) {
  let param = {
    mobile: phone,
    serviceType: 1
  };
  return wepy.request({
    url: ApiUrl.loginInfo.smsCode,
    data: genReqBody(param, ''),
    method: 'POST'
  });
}
