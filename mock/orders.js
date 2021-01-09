const Mock = require('mockjs')
var Random = Mock.Random
const utils = require('./utils')

function createdata(start, end) {
    let data = Mock.mock({
        'orders|30000': [
            {
                id: '@id',
                name: function () {
                    return Random.boolean() ? Random.cname() : Random.first()
                },
                'price|1': [100, 68, 80, 30, 12, 998],
                'goosnum|1-10': 1,
                totalamount: function () {
                    return this.price * this.goosnum
                },
                status: Random.boolean(5, 1, true),
                createtime: function () {
                    let ts = utils.randomDate(start, end)
                    return ts
                }
            }
        ]
    })
    return data
}

module.exports = [
    {
        url: '/vue-admin-template/orders/list',
        type: 'post',
        response: config => {

            const { start, end } = config.body

            const data = createdata(start, end)

            const items = data.orders
            return {
                code: 20000,
                data: items
            }
        }
    }
]
