export default {
	// 游戏logo，不传则不显示
	image: {
		type: String
	},
	// logo图片大小(正方形)，默认60
	imageSize: {
		type: Number | String,
		default: 60
	},
	// 游戏名
	name: {
		type: String
	},
	// 游戏账号
	account: {
		type: String
	},
	// 账号密码
	password: {
		type: String
	},
	// 领取时间
	time: {
		type: String
	},
	// 礼包
	gifts: {
		type: Array,
		default: () => []
	}
}