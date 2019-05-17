// Logica para obtener la informacion
const axios = require('axios');

const getCLima = async(lat, lng) => {

    //console.log(lat, lng);
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=32f843d833c38373032f825c4a92418a&units=metric`);

    //console.log(resp.data.main.temp);
    return resp.data.main.temp;
}

module.exports = {
    getCLima
}