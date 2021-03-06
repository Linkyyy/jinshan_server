import * as db from './db'
import { ISku, SkuStatus, UserRole } from './types'

export function listSku(keyword?: string, status?: SkuStatus) {
  return db.listSku(keyword, status)
}

export function findSku(id: string) {
  return db.findSku(id)
}

// 分类查询
export function catsearch(cat: string) {
  return db.catsearch(cat)
}

export function addSku(sku: ISku) {
  return db.addSku(sku)
}

export function updateSku(sku: ISku) {
  return db.updateSku(sku)
}

export function removeSku(id: string) {
  return db.removeSku(id)
}

export function login(username: string, password: string, role: UserRole) {
  return db.login(username, password, role)
}

export function userInfo(token: string) {
  return db.userInfo(token)
}

export function logout(token: string) {
  return db.logout(token)
}

export function addCart(username: string, skuId: string) {
  return db.addCart(username, skuId)
}

export function listCart(username: string) {
  return db.listCart(username)
}

export function removeCart(username: string, ids: string[]) {
  return db.removeCart(username, ids)
}

export function addStar(username: string, skuId: string) {
  return db.addStar(username, skuId)
}

export function listStar(username: string) {
  return db.listStar(username)
}

export function removeStar(username: string, ids: string[]) {
  return db.removeStar(username, ids)
}