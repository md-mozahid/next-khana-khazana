export const wait = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolve...')
    }, 2000)
  })
}
