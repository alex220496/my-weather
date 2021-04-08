
const weatherApi = "362b5b9de9dc2aed5f5474f2effd259c";
const inputCity =  document.querySelector(".input-city");
let btn = document.querySelector(".btn");
const showTemp = document.querySelector(".show-temp");


btn.addEventListener("click", () => {
    const cityInput = inputCity.value;
    
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${weatherApi}`)
    .then((response) => {
        if (!response.ok) {
          alert("Сity not found.");
          throw new Error("Сity not found.");
        }
        return response.json();
      })
    .then(data => {
        console.log(data);

        inputCity.value = "";

        showTemp.innerHTML = `
            <div class="name-of-city">Weather in ${data.name}</div>
            <div class="temp-weather">${data.main.temp}°C
                    <img class="icon" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
            </div>
            
            <div class="descripti">
                <div class="cloud">Cloud: ${data.weather[0].description}</div>
                <div class="humidity">Humidity: ${data.main.humidity}%</div>
                <div class="wind-speed">Wind speed: ${data.wind.speed}km/h</div>
            </div>
           
        `;

        
    })
    
})

