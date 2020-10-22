const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58
  return temperarura = Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo


const sendMarsTemperature = callback => {
  setTimeout(()=> { 
  const temperarura = getMarsTemperature( callback => callback);
  const returnTemp = `Mars temperature is: ${temperarura} degree Celsius`;
  return callback(returnTemp);
}, messageDelay)};

sendMarsTemperature( temperatura => {
  setTimeout(()=> { console.log(temperatura) },messageDelay)
});

sendMarsTemperature(getMarsTemperature);
