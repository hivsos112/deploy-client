import request from '@/utils/request'

export function loadFiles(params) {
  return request({
    url: '/file/fileList',
    method: 'get',
    params
  })
}

export function loadProps(params) {
  return request({
    url: '/file/fileProp',
    method: 'get',
    params
  })
}
