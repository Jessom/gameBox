import config from '@/common/config.js'

/**
 * 获取用户信息
 * @params params
 * @params params.member_id	用户id
 * @params params.username	用户名
 */
export const getMemberInfo = (params) => uni.$u.http.post(`${config.baseUrl}/user/user/getMemberInfo`, params)

/**
 * 账号密码登录
 * @params params
 * @params params.password
 * @params params.username
 */
export const login = (params) => uni.$u.http.post(`${config.baseUrl}/user/user/login`, params)

/**
 * 注册
 * @params params
 * @params params.password
 * @params params.username
 * @params params.regtype	5
 */
export const register = (params) => uni.$u.http.post(`${config.baseUrl}/user/user/register`, params)

/**
 * 修改用户信息
 * @params params
 * @params params.member_id
 * @params params.username
 * @params params.nick_name			修改昵称
 * @params params.identity_card	实名认证
 * @params params.real_name			实名认证
 */
export const editMemberInfo = (params) => uni.$u.http.post(`${config.baseUrl}/user/user/editMemberInfo`, params)

/**
 * 修改密码
 * @params params
 * @params params.member_id
 * @params params.username
 * @params params.password
 * @params params.newpassword
 */
export const modifyPwd = (params) => uni.$u.http.post(`${config.baseUrl}/user/user/modifyPwd`, params)

/**
 * 验证绑定手机、解绑手机号
 * @params params
 * @params params.member_id
 * @params params.username
 * @params params.code
 * @params params.mobile
 */
export const bindPhone = (params) => uni.$u.http.post(`${config.baseUrl}/user/user/bindPhone`, params)

