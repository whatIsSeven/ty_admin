import { storage, tokenTableName, headerHash } from '@/config'

/**
 * @author https://vue-admin-beautiful.com （不想保留author可删除）
 * @description 获取accessToken
 * @returns {string|ActiveX.IXMLDOMNode|Promise<any>|any|IDBRequest<any>|MediaKeyStatus|FormDataEntryValue|Function|Promise<Credential | null>}
 */
export function getAccessToken() {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.getItem(tokenTableName)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.getItem(tokenTableName)
    } else {
      return localStorage.getItem(tokenTableName)
    }
  } else {
    return localStorage.getItem(tokenTableName)
  }
}

/**
 * @author https://vue-admin-beautiful.com （不想保留author可删除）
 * @description 存储accessToken
 * @param accessToken
 * @returns {void|*}
 */
export function setAccessToken(accessToken) {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.setItem(tokenTableName, accessToken)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.setItem(tokenTableName, accessToken)
    } else {
      return localStorage.setItem(tokenTableName, accessToken)
    }
  } else {
    return localStorage.setItem(tokenTableName, accessToken)
  }
}

/**
 * @author https://vue-admin-beautiful.com （不想保留author可删除）
 * @description 移除accessToken
 * @returns {void|Promise<void>}
 */
export function removeAccessToken() {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.removeItem(tokenTableName)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.clear()
    } else {
      return localStorage.removeItem(tokenTableName)
    }
  } else {
    return localStorage.removeItem(tokenTableName)
  }
}

export function setHash(hash) {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.setItem(headerHash, hash)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.setItem(headerHash, hash)
    } else {
      return localStorage.setItem(headerHash, hash)
    }
  } else {
    return localStorage.setItem(headerHash, hash)
  }
}

export function getHash() {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.getItem(headerHash)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.getItem(headerHash)
    } else {
      return localStorage.getItem(headerHash)
    }
  } else {
    return localStorage.getItem(headerHash)
  }
}
