function produceDrivingRange(blockRange) {
  return function(start, end){
    let a = parseInt(start) 
    let b = parseInt(end)
    if (a > b) {
      const trip = a - b
    } else {
      const trip = b - a
    }
    if (trip > blockRange) {
      return `${trip} blocks out of range`
    } else {
      return `within range by ${trip}`
    }
  }
}