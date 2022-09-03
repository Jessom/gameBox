import store from '@/store/index.js'
import config from '@/common/config.js'

let deviceInfo = uni.$u.sys()

export const upload = (file) => {
	const { member_id, username, token } = store.state
	uni.uploadFile({
		url: config.baseUrl + '/user/user/uploadAvatar',
		filePath: file,
		formData: {
			member_id,
			username,
		},
		header: {
			token: token || '',
			username: username || '',
			channel: getApp().globalData.channel || '',
			'device-name': `${deviceInfo.brand} ${deviceInfo.model}`,
			'device-type': uni.$u.os() == 'ios' ? 20 : 10,
			'sdk-version': deviceInfo.SDKVersion,
		},
		success(res) {
			if(res.status.succeed == 1) {
				uni.$u.toast('上传成功，等待审核')
			} else {
				uni.$u.toast(res.status.error_desc)
			}
		},
		complete: (e) => {
			store.dispatch('getMemberInfo', {
				member_id,
				username
			})
		}
	})
}