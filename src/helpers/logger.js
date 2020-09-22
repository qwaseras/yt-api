
const now = () => {
  const time = new Date()
  return time.toLocaleTimeString()
}

export const log = (msg, type) => {
  const logTypes = {
    info: console.info,
    error: console.error,
    log: console.log
  }
  logTypes[type](now() + ' ' + msg)
}
