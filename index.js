// Code your solution in this file!
function distanceFromHqInBlocks (blocks) {
    //returns the number of blocks given a value
    const headquaters = 42;
    return Math.abs(headquaters-blocks);
  }

  function distanceFromHqInFeet (blocks){
    const feet = distanceFromHqInBlocks(blocks);
    return feet * 264;
  }

  function distanceTravelledInFeet (start,end){
    return Math.abs(start - end)*264;
  }

 function calculatesFarePrice(start,end){
  const distance =distanceTravelledInFeet(start,end);
  if (distance<=400){
    return 0;
  } else if(distance>400 && distance <=2000){
    return (distance - 400)*0.02;
  }else if(distance>2000 && distance<=2500){
    return 25;
  } else if(distance >2500){
    return 'cannot travel that far';
  }
 }