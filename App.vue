<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			channel: "e4ps",
			btnShow: false,
			qq: "",
			email: ""
		}
	}
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
@import './static/iconfont/iconfont.css';
@import './common/scss/style.scss';
</style>
