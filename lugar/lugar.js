/**
 * 
 */

const axios = require('axios');

let getLugLatLng = async(direccion) => {

    let encodeURL = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No se encontro la ciudad ${direccion}`);
    }

    let location = resp.data.results[0].geometry.location;
    let lugar = resp.data.results[0].formatted_address;

    return {
        direccion: lugar,
        lat: location.lat,
        lng: location.lng
    }
}

module.exports = {
    getLugLatLng
}