const opts = {
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima.',
        demand: true
    }
}

/**
 * NO se usa 'command' porque no habrá comando intermedio en la llamda.
 * La llamda será tipo: node app -d CIUDAD PAIS
 */
const argv = require('yargs')
    .options(opts)
    .help()
    .argv;

module.exports = {
    argv
}