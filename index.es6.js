import Promise from 'promise'
import crypto from 'crypto'

export const randomBytes = Promise.denodeify(crypto.randomBytes)
export const pbkdf2 = Promise.denodeify(crypto.pbkdf2)
