// Logica para obtener la informacion
const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);
    //let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAjshYhCeiyvmCk9N3t_0jYOFAocdanzs8`);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': '2bb553c37cmsh22ca058751c0933p1291fajsn8be069a80879' }
    });

    let resp = await instance.get();



    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para la ciudada ${direccion}`);
    }

    let location = resp.data.Results[0];

    //console.log(location.name, location.lat, location.lon);

    return {
        direccion: location.name,
        lat: location.lat,
        lng: location.lon
    }
}

module.exports = {
    getLugarLatLng
}