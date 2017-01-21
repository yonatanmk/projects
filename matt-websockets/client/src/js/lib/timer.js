'use strict'

function Timer () {
  let intervalId = null
  let time = 0

  function start () {
    let previous = Date.now()

    intervalId = setInterval(() => {
      const currentTime = Date.now()
      const delta = (currentTime - previous) / 1000

      previous = currentTime

      if (typeof onUpdate === 'function') {
        onUpdate(delta)
      }

      time += delta
    }, 4)
  }

  function stop () {
    clearInterval(intervalId)
    time = 0
  }

  function getTime () {
    return time
  }

  function setTime (value) {
    time = value
  }

  return Object.freeze({
    start,
    stop,
    getTime,
    setTime
  })
}

export { Timer }
