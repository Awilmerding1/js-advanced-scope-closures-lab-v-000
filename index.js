function produceDrivingRange(blockRange) {
  return function(start, end){
    let a = parseInt(start) 
    let b = parseInt(end)
    let trip = 0
    if (a > b) {
      let trip = a - b
    } else {
      let trip = b - a
    }
    if (trip > blockRange) {
      return `${a} blocks out of range`
    } else {
      return `within range by ${trip}`
    }
  }
}