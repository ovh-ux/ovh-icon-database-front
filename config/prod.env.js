'use strict'
module.exports = {
  NODE_ENV: '"production"',
  OSS_URL: JSON.stringify(process.env.OSS_URL || ''),
  OSS_AUTH: JSON.stringify(process.env.OSS_AUTH || ''),
  OSS_CONTAINER: JSON.stringify(process.env.OSS_CONTAINER || '')
}
