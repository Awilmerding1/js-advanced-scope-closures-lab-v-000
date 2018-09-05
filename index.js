function produceDrivingRange(blockRange) {
  return function(trip){
    if (trip > blockRange) {
      return `$ blocks out of range`
    }
  }
}