import config from '@/common/config.js'

/**
 * 获取验证码
 * @params params
 * @params params.code	取值 code
 * @params params.mobile	手机号(86-xxxxxxx)
 * @params params.type		类型：08(注册、登录)、07(绑定、解绑手机号)
 */
export const getVerifyCode = (params) => uni.$u.http.post(`${config.baseUrl}/base/tool/getVerifyCode`, params)

/**
 * 我的礼包
 * @params params
 * @params params.member_id
 * @params params.username
 * @params params.search_info
 * @params params.pagination
 * @params params.pagination.page
 */
export const getMyGiftList = (params) => uni.$u.http.post(`${config.baseUrl}/base/gift/getMyGiftList`, params)

/**
 * 礼包详情
 * @params params
 * @params params.member_id
 * @params params.username
 * @params params.gift_id
 */
export const getGiftDetail = (params) => uni.$u.http.post(`${config.baseUrl}/base/gift/getGiftDetail`, params)

/**
 * 获取首页数据
 */
export const getHomeGameList = (params) => uni.$u.http.post(`${config.baseUrl}/base/newindex/getHomeGameList`, params)

/**
 * 游戏详情
 * @params params
 * @params params.member_id
 * @params params.username
 * @params params.game_id
 */
export const getGameDetail = (params) => uni.$u.http.post(`${config.baseUrl}/base/game/getGameDetail`, params)
