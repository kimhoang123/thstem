async function getWeather(cityName){
    const API_KEY="a75cebd163a9dfc8b18dd52cd8b6671a"
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}')
    const body = await response.json()
    console.log(body)
}
getWeather()