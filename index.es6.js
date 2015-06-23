import Promise from 'promise'
import crypto from 'crypto'

export default {
  randomBytes: Promise.denodeify(crypto.randomBytes),
  pbkdf2: Promise.denodeify(crypto.pbkdf2)
}
