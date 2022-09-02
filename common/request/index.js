// 引入配置
import config from '@/common/config'

let deviceInfo = uni.$u.sys()

// 初始化请求配置
uni.$u.http.setConfig((defaultConfig) => {
    /* defaultConfig 为默认全局配置 */
    // defaultConfig.baseURL = config.baseUrl
	
	defaultConfig.header = {
		'device-name': `${deviceInfo.brand} ${deviceInfo.model}`,
		'device-type': uni.$u.os() == 'ios' ? 20 : 10,
		'sdk-version': deviceInfo.SDKVersion,
	}
    return defaultConfig
})

module.exports = (vm) => {
    require('./requestInterceptors')(vm)
    require('./responseInterceptors')(vm)
}
