const COMMON_ERROR = {
  1: 'bad params',
  3: '未包含必要的Key'
}

const USER_ERROR = {
  0: '成功',
  1: 'token错误',
  2: '密码错误',
  3: '此用户不存在',
  4: '此用户已存在',
  5:'百度用户已绑定',
  99: '内部错误'
}

const FILE_ERROR = {
  2: 'cookie失效',
  3: '不存在的用户',
  4: '获取目录失败，服务器返回错误代码 -9',
  5: '处理请求时遇到错误',
  10: '无法处理文件夹'
}

export {
  COMMON_ERROR,
  USER_ERROR,
  FILE_ERROR
}
