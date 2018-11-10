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
        let temperatura = await clima.getCLima(place.lat, place.lng);

        return `El clima en ${place} es de ${temperatura}`;
    } catch (error) {
        return `No se pudo determinar el clime en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));