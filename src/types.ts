export enum SkuStatus {
  /**
   * 上架
   */
  Normal = 1,
  /**
   * 下架
   */
  Offline = 2
}

export interface ISku {
  /**
   * 商品ID
   */
  id?: string
  /**
   * 商品标题
   */
  title: string
  /**
   * 商品库存
   */
  stock: number
  /**
   * 商品加个
   */
  price: number
  /**
   * 封面图
   */
  cover: string
  /**
   * 头图集合
   */
  gallery: string[]
  /**
   * 分类集合
   */
  cat: string[]
  /**
   * 标签集合
   */
   label: string[]
  /**
   * 详情图集合
   */
   detail: string[]
  /**
   * 发布时间
   */
  time: number
  /**
   * 商品状态，1-正常，2-下架
   */
  status: SkuStatus
}

export enum UserRole {
  /**
   * 普通用户
   */
  Common = 1,
  /**
   * 管理员
   */
  Admin = 2
}

export interface IUser {
  /**
   * 用户名
   */
  username: string
  /**
   * 昵称
   */
  nickname: string
  /**
   * 密码
   */
  password?: string
  /**
   * 头像地址
   */
  avatar: string
  /**
   * 用户角色
   */
  role: UserRole
}

/**
 * 购物车
 */
export interface ICart {
  /**
   * 用户名
   */
  username: string
  /**
   * 商品ID
   */
  skuId: string
}

/**
 * 收藏
 */
 export interface IStar {
  /**
   * 用户名
   */
  username: string
  /**
   * 商品ID
   */
  skuId: string
}

export type Pick<T> = {
  [P in keyof T]?: T[P]
}
