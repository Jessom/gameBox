export default {
	// 代金券标题
	title: {
		type: String,
		required: true
	},
	// 游戏名称，不传则不显示
	name: {
		type: String,
	},
	// 代金券有效期，不传则不显示
	time: {
		type: String,
	},
	// 代金券金额
	price: {
		type: String,
		required: true
	},
	// 满多少
	total: {
		type: String,
		required: true
	},
	// 按钮文本
	buttonText: {
		type: String,
		default: '立即领取'
	},
	// 是否禁用按钮
	disabled: {
		type: Boolean,
		default: false
	},
	// 是否过期
	over: {
		type: Boolean,
		default: false
	}
}
