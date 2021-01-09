import request from '@/utils/request'

export function getOrders(data) {
    return request({
        url: '/meituan/order',
        method: 'post',
        baseURL: 'http://api.7hds.com/api/', // 直接通过覆盖的方式
        data: data
    })
}

export function getLinks(data) {
    return request({
        url: '/meituan/link/' + data,
        method: 'get',
        baseURL: 'http://api.7hds.com/api/', // 直接通过覆盖的方式
    })
}

