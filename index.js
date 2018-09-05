function produceDrivingRange(blockRange) {
  return function(start, end){
    let a = Number.parseInt(start, 10) 
    let b = Number.parseInt(end, 10)
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