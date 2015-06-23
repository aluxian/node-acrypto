import assert from 'assert'
import done from 'promise-done'
import acrypto from './'

async function test () {
  const rand = await acrypto.randomBytes(16)
  assert.equal(rand.length, 16)

  const pbkdf2_1 = await acrypto.pbkdf2('secret', 'salt', 256, 256, 'sha256')
  assert.equal(pbkdf2_1.toString('base64'), 'ISRx3M7SLw+MYaOLYqr/Gm/w701etAOIWM+gY1S2RVJzqEakPpsFipAUxObCczr3HmN6k0nXxwL560yKLcVf6uvBHwn68/1xsZhqITpk8k/m/wl0FqNuH1q+UamDxrUp24tgbrfVUVQAz194vhT0paYQJ46zwQzhiVD342HCPx12FAuh5RfT+cKwQD2//wNLByndTASFICmgy8noMmOhxssTdaePrlwWxI/fPAN02Yh9cKdlz0iJHqnw+alSNhZm6G87kgWO6aSkBXZO7vFqQ7+pzfwOUXzTam1mS1/CpAcAmzJsb2JIG58pFlhIUufGU3MWUbhCKyb9ywRVSCNF/A==')

  const pbkdf2_2 = await acrypto.pbkdf2('secret', 'salt', 256, 256)
  assert.equal(pbkdf2_2.toString('base64'), '0iy3dipILaHFh5ANnLqkgJRRWJgtTMKV82hZab0L+u+H/fLtfmls8nxAUydFjQ8QAKOYwQMkBbT/z6GhrgFYcmk53/0EYQaloUktQhJu6gUOMWP+E89dKIxyebJ0wGtjL/CcMSk9Z+RsbkiXiMmgx7ptOEdl91jryAc3S/cGAqrMxZo6995XvIkHtn76M134hwHrV0FsgxcLB1vLngYxonB7G1e7TzhcuizLCWJX/USaxtHjkU91Kxl/jUowvyYWMzXriUOsInPktahDUdfe/UovZLG5XXrraHJdJizvVXZqNNygqUUjfEiO7wz60t6GSWW1MEvh6/DhCE6mqxxdgQ==')
}

test().then(null, done)
