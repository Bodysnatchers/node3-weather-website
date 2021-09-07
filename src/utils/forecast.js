const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4facb32130c2552c839f5575af56e132&query='+ latitude +','+ longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            //console.log(body.current.data[0])
            callback(undefined, body.current.weather_descriptions[0] + ' Today. It is currently ' + body.current.temperature + ' Degrees out, however It feels like '+ body.current.feelslike +'. There is a '+ body.current.precip+' % chance to rain. The windspeed is ' + body.current.wind_speed)
        } 
        
    })
}


module.exports = forecast