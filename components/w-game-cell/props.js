export default {
	// 游戏logo，不传则不显示
	image: {
		type: String
	},
	// logo图片大小(正方形)，默认140
	imageSize: {
		type: Number | String,
		default: 130
	},
	// 游戏名称，不传不显示
	name: {
		type: String
	},
	// 标题右侧tag，不传不显示
	label: {
		type: String
	},
	// 游戏分类，不传不显示
	classify: {
		type: String
	},
	// 游戏描述，不传不显示
	describe: {
		type: Array,
		default: () => []
	},
	bottomLabel: {
		type: String
	},
	bottomContent: {
		type: String
	},
	bottomType: {
		type: String | Number,
		default: 1
	}
}
