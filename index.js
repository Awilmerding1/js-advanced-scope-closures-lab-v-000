function produceDrivingRange(blockRange) {
  return function(start, end){
    let a = parseInt(start) 
    let b = parseInt(end)
    let trip;
    if (a < b) {
       trip = b - a
    } else {
       trip = a - b
    }
    if (trip > blockRange) {
      return `${trip-blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - trip}`
    }
  }
}

function produceTipCalculator(fare) {
  return function(percent) {
    return fare*percent
  }
  
  function createDriver() {
  	let DriverId = 0;
    return class  {
      
      constructor() {
        
      }
      
    }
    
  }
  
  
}



