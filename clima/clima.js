// Logica para obtener la informacion
const axios = require('axios');

const getCLima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}
    &appid=b6907d289e10d714a6e88b30761fae22`);

    return resp.main.temp;
}

module.exports = {
    getCLima
}