const globalDataStore = []

const processNumber = randomSizeArray => {
  globalDataStore.push(randomSizeArray)
  // process data here
  return true
}

setInterval(() => {
  const randomSizeArray = Array(Math.floor(Math.random() * 10000)).fill(
    Math.random() * 10000
  )
  processNumber(randomSizeArray)
}, 500)
