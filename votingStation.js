// it must have a capacity of at 
// least 20, and be a school or 
// community centre.
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
const approveStations = [];


const chooseStations = function (stations) {
  // Your code in here ...
  //loop around
  for(const station of stations){
    const capacity = station[1];
    if ((capacity >= 20) && (station[2] === 'school' || station[2] === 'community centre') ){
      approveStations.push(station[0]);
    }
  }return(approveStations);
};


console.log(chooseStations(stations));