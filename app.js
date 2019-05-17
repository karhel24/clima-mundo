const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => console.log(err));



// clima.getCLima(resp.lat, resp.lng)
//     .then(temp => console.log(temp))
//     .catch(err => clg(err));



let getInfo = async(direccion) => {

    try {

        let place = await lugar.getLugarLatLng(direccion);
        //console.log(place);
        let temperatura = await clima.getCLima(place.lat, place.lng);

        return `El clima en ${place.direccion} es de ${temperatura}ºC`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));