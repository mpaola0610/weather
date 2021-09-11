// 434be31138afea1b2cabd7cf8e93f66b



    const key= "434be31138afea1b2cabd7cf8e93f66b"
    let fetchWeather = function(city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Imperial&appid=${key}`
        )
        .then((response) => response.json())
        .then((data) => displayWeather(data));
        }
    let displayWeather = function(data) {
        const name = data.name
        const forecast = data.weather[0].description
        const temp = data.main.temp
        const humidity = data.main.humidity
        const wind = data.wind.speed
        console.log(name,forecast,temp,humidity,wind)
        document.querySelector(".city").innerText =`Weather in ${name}` 
        document.querySelector(".forecast").innerText = `Forecast: ${forecast}`
        document.querySelector(".temp").innerText = `Temp: ${temp}°F`
        document.querySelector(".wind").innerText = `Winds: ${wind}`
        document.querySelector(".humidity").innerText = `humidity: ${humidity}%`
    }
    let searchfunction = function() {
        fetchWeather(document.querySelector(".search-bar").value);
    }
   


document
    .querySelector(".search button")
    .addEventListener("click", function() {
        searchfunction();
    });       

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            search();
        }
    } );
               


