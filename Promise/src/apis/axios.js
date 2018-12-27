/* 
 * Promise 是构造函数, new了一个对象, Promise的时候一般是包在一个函数中， 在需要的时候去运行这个函数
 * 新建http函数会return出Promise对象, 得到了一个Promise对象。
 * Promise对象参数(resolve, reject) 对应then、 catch方法
*/
// axios封装预处理一些
import axios from 'axios'
// 请求头
const formatHeaders = (acHeaders) => {
	let headers = {}
	headers['exchange-token'] = ''
	headers['exchange-client'] = 'pc'
	headers['exchange-language'] = localStorage.lan || 'en_US'
	if (acHeaders) {
		for (let i in acHeaders) {
			headers[i] = acHeaders[i]
		}
	}
	return headers
}

// 返回Promise
const http = ({url, headers, method, params}) => {
	return new Promise((resolve, reject) => {
		axios({
			url: `${url}`,
			headers: formatHeaders(headers),
			data: params,
			method: method || 'post'
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
			throw new Error(`Error:${err}`)
		})
	})
}
export default http


// ES6
/* const http = () => {
	return new Promise((resolve, reject) => {
		//做一些异步操作, 如封装axios
		setTimeout(() => {
			var num = Math.ceil(Math.random() * 10)
			if (num <= 5) {
				resolve(num)
			} else {
				reject('数字太大了')
			}
		}, 1000)
	})
} */

// ES5
// var http = function http() {
// 	return new Promise(function (resolve) {
// 		setTimeout(function () {
// 			console.log('执行完成')
// 			resolve('随便什么数据')
// 		}, 1000)
// 	})
// }