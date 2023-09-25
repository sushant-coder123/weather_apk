
const searchBox=document.querySelector("#city") ;
const btn=document.querySelector(".search button");
const checkWeather=async function(city){
  
    const apiKey="4c67674f5af7cb93bb6b9dc99090f983";
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    let weatherData=await response.json() ;
    console.log(weatherData);
    document.getElementById("cityName").innerHTML=weatherData.name;
    document.getElementById("temperature").innerHTML=Math.round(weatherData.main.temp)+"°C";
    document.getElementById("humidity").innerHTML=weatherData.main.humidity+"%";
    document.getElementById("wind").innerHTML=weatherData.wind.speed+"km/h";
    
}
 
btn.addEventListener('click',()=>{
    checkWeather(searchBox.value)
});
searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      checkWeather(searchBox.value);
    }
});