const baseUrl = 'http://140.143.185.219:8082/wx' // test

if (process.env.NODE_ENV === 'development') {
	console.log('开发环境')
} else {
	console.log('生产环境')
}

const request = ({
	url,
	data,
	method,
	loading = true
}) => {
	return new Promise((resolve, reject) => {
		let header = {
			'X-Kitten-Token': uni.getStorageSync('token'),
			// 'X-Kitten-Token': 'epdjwt057qlb9xu8mdhdh9vohcfms0n8'
		}
		// if (loading) {
		// 	uni.showLoading({
		// 		title: ''
		// 	});
		// }
		uni.request({
			method,
			url: baseUrl + url,
			data,
			header,
			dataType: 'json',
			success: (res) => {
				// if (loading) {
				// 	setTimeout(function() {
				// 		uni.hideLoading();
				// 	}, 200);
				// }
				if (res.data.errno !== 0) {
					uni.showToast({
						title: res.data.errmsg,
						icon: 'none'
					})
				}
				resolve(res.data);
			},
			fail: (err) => {
				console.log('err', err)
				reject(err)
			}
		})
	});
}
export default request
export {
	baseUrl
}
