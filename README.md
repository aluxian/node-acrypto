# acrypto [![npm version](http://img.shields.io/npm/v/acrypto.svg?style=flat-square)](https://www.npmjs.org/package/acrypto)

> Promise based version of Node.js `crypto` module which only includes `randomBytes` and `pbkdf2`.

Example
-------

```js
import acrypto from 'acrypto'

async function () {
  const rand = await acrypto.randomBytes(16)
  rand.length // 16

  const pbkdf2 = await acrypto.pbkdf2('secret', 'salt', 256, 256, 'sha256')
  pbkdf2.toString('hex') // ...
}
```
