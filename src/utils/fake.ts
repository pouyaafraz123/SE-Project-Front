export const randomBool = (function () {
  const a = new Uint8Array(1)
  return function () {
    crypto.getRandomValues(a)
    return a[0] > 127
  }
})()
