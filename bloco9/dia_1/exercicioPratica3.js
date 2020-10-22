
const getPlanet = callback => {
  setTimeout(()=> { 
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
  return callback();
}, 4000)};

getPlanet( user => {
  setTimeout(()=> { user },4000)
}); // imprime Marte depois de 4 segundos
