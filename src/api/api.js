/*Created By Jsir on 2018/4/25*/
'use strict'
import request from './request'

module.exports = {

    getIendx(parmas) {
        return request({
            url: '/Home/index',
            method: 'GET',
            data: parmas || {}
        })
    },
    getRank(id) {
        return request({
            url: '/Ranking/getRanking/' + id,
            method: 'GET',
            data: ''
        })
    },

}