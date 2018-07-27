/**
 * 
 */

//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}).argv;


const getInfo = async(direccion) => {


    try {

        let coords = await lugar.getLugLatLng(direccion);
        let temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de la ciudad de ${coords.direccion} es de ${temp} grados`;
    } catch (error) {
        return `No se pudo determinar el clima de la ciudad ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.log(err);
    })
    /*clima.getClima(-16.489689, -68.11929359999999)
        .then(resp => {
            console.log(`La temperatura es de : ${resp} grados centigrados`);
        })
        .catch(err => {
            console.log(err);
        })
        /*
        lugar.getLugLatLng(argv.direccion)
            .then(resp => {
                console.log(resp);
            })
            .catch(err => {
                console.log(err);
            });
        /*console.log(argv.direccion);
        */