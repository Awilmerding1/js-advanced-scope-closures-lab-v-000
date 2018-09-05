function produceDrivingRange(blockRange) {
  return function(start, end){
    if (start > end) {
      let trip = start - end
    } else {
      let trip = end - start
    }
    if (trip > blockRange) {
      return `${trip} blocks out of range`
    }
  }
}