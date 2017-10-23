class ResponseInfo {
  static _responseinfo(errno, data, msg) {
    let info = data
    info.errno = errno;
    info.message = msg;
    return info;
  }
  static successresponse(data, msg='') {
    return ResponseInfo._responseinfo(0, data, msg)
  }
  static failedresponse(errno, msg='') {
    return ResponseInfo._responseinfo(errno, {}, msg)
  }
}

export default ResponseInfo;
