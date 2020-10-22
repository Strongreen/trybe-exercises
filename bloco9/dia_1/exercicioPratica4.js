const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58
  return temperarura = Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo


const sendMarsTemperature = callback => {
  setTimeout(()=> { 
  const temperarura = getMarsTemperature( callback => callback);
  console.log(`Mars temperature is: ${temperarura} degree Celsius`);
  return callback();
}, messageDelay)};

sendMarsTemperature( temperatura => {
  setTimeout(()=> { temperatura },messageDelay)
});
