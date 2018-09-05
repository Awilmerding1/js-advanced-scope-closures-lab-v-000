function produceDrivingRange(blockRange) {
  return function(start, end){
    let a = Number.parseInt(start, 10) 
   let b = Number.parseInt(end, 10)
    if (start > end) {
      let trip = start - end
    } else {
      let trip = end - start
    }
    if (trip > blockRange) {
      return `${trip} blocks out of range`
    } else {
      return `within range by ${trip}`
    }
  }
}