function produceDrivingRange(blockRange) {
  let start = Number.parseInt(this.beginningLocation['vertical'], 10) 
  let end = Number.parseInt(this.endingLocation['vertical'], 10)
  return function(start, end){
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