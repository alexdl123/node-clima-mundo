/**
 * 
 */

const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=7ac6eb7199f8550b74122ba0cbc7f434`);
    if (resp.data.cod === '400') {
        throw new Error('Error, ciudad no encontrada');
    }
    return resp.data.main.temp;
}

module.exports = {
    getClima
}