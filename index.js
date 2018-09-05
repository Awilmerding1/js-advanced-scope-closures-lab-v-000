function produceDrivingRange(blockRange) {
  return function(start, end){
    let a = parseInt(start, 10) 
    let b = parseInt(end, 10)
    let trip;
    if (a > b) {
      let trip = a - b
    } else {
      let trip = b - a
    }
    if (trip > blockRange) {
      return `${trip} blocks out of range`
    } else {
      return `within range by ${trip}`
    }
  }
}