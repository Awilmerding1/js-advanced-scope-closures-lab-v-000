function produceDrivingRange(blockRange) {
  return function(start, end){
    let a = parseInt(start) 
    let b = parseInt(end)
    let trip;
    if (a < b) {
      let trip = b - a
    } else {
      let trip = a - b
    }
    return b
    if (trip > blockRange) {
      return `${trip} blocks out of range`
    } else {
      return `within range by ${trip}`
    }
  }
}