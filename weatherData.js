const request = require('request')

const openWeatherMap = {
    BASE_URL : "https://api.openweathermap.org/data/2.5/weather?q",
    SECRET_KEY: "407758c9a808cc7fcdc8356c2acc464d"
}

const weatherData = (address, callback) => {
    const url = openWeatherMap.BASE_URL + encodeURIComponent(address) + "&APPID=" + openWeatherMap.SECRET_KEY;
    console.log(url)

    // Utilisez une seule fonction de rappel pour la requête
    request({ url, json: true }, (error, response, body) => {
        if (error) {
            callback(true, 'Unable to fetch data, please try again: ' + error);
        } else if (response.statusCode !== 200) {
            callback(true, 'Unable to fetch data, received status code: ' + response.statusCode);
        } else {
            // En cas de succès, appeler le callback avec les données récupérées
            callback(false, data?.body);
        }
    });
};

module.exports = weatherData;