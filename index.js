function produceDrivingRange(blockRange) {
  return function(trip){
    if (trip > blockRange) {
      return '2 blocks out of range'
    }
  }
}