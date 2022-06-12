export default {
	// 游戏视频
	video: {
		type: String
	},
	// 视频海报
	poster: {
		type: String
	},
	// 游戏图片
	images: {
		type: Array,
		default: () => []
	}
}
