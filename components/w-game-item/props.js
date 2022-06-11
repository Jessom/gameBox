export default {
	// 游戏logo，不传则不显示
	image: {
		type: String
	},
	// logo图片大小(正方形)，默认143
	imageSize: {
		type: Number | String,
		default: 143
	},
	// 游戏名称，不传不显示
	name: {
		type: String
	},
	// 游戏分类，不传不显示
	classify: {
		type: String
	}
}
