export default {
	className: {
		type: String
	},
	// 游戏logo，不传则不显示
	image: {
		type: String
	},
	// logo图片大小(正方形)，默认120
	imageSize: {
		type: Number | String,
		default: 120
	},
	// 礼包标题
	title: {
		type: String,
		required: true
	},
	// 礼包名称，不传则不显示
	name: {
		type: String,
	},
	// 礼包内容，不传则不显示
	content: {
		type: String,
	},
	// 礼包有效期，不传则不显示
	time: {
		type: String,
	},
	// 礼包码，不传则不显示
	code: {
		type: String,
	},
	// 按钮文本
	buttonText: {
		type: String,
		default: '领取'
	},
	// 是否禁用按钮
	disabled: {
		type: Boolean,
		default: false
	}
}
