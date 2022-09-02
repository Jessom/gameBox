import config from '@/common/config.js'

/**
 * 手机号验证码登录、注册
 * @params params
 * @params params.code	验证码
 * @params params.mobile	手机号
 */
export const smsLogin = (params) => uni.$u.http.post(`${config.baseUrl}/smsLogin`, params)

/**
 * 我的收藏
 * @params params
 * @params params.member_id
 * @params params.username
 * @params params.type	2游戏收藏
 * @params params.pagination
 * @params params.pagination.page
 */
export const collectedGames = (params) => uni.$u.http.post(`${config.baseUrl}/collectedGames`, params)

/**
 * 交易收藏
 * @params params
 * @params params.member_id
 * @params params.username
 * @params params.pagination
 * @params params.pagination.page
 */
export const collectedTrades = (params) => uni.$u.http.post(`${config.baseUrl}/collectedTrades`, params)

/**
 * 我的代金券
 * @params params
 * @params params.is_expired	可使用0	已使用不传		已过期true
 * @params params.is_used			可使用0	已使用true		已过期不传
 * @params params.member_id
 * @params params.username
 * @params params.pagination
 * @params params.pagination.page
 * @params params.pagination.count
 */
export const receivedVouchers = (params) => uni.$u.http.post(`${config.baseUrl}/receivedVouchers`, params)
