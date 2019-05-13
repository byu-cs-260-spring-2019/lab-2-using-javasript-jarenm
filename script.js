// window.onload = function() {
//     document.getElementById("weatherSubmit").addEventListener("click", function(event) {
//         event.preventDefault();
//         const value = document.getElementById("weatherInput").value;
//         if (value === "")
//           return;
//         console.log(value);
    
//         const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" 
//         + "&APPID=1d229dbdfe45d89986ee544ed1a1a816";
//     try {
//         const response = await fetch(url)
//         //console.log("response: ", response);
//         const json = await response.json();
//         //console.log("json: ", json)
//         let results = "";
//         results += '<h2 class="weatherTitle">Weather in ' + json.name + "</h2>";
//         for (let i=0; i < json.weather.length; i++) {
// 	    results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
//         }
//         results += '<h2>' + json.main.temp + " &deg;F</h2>"
//         results += "<p>"
//         for (let i=0; i < json.weather.length; i++) {
// 	        results += json.weather[i].description
// 	            if (i !== json.weather.length - 1)
// 	                results += ", "
//         }
//         results += "</p>";
//         document.getElementById("weatherResults").innerHTML = results;
//     } catch(err) {
//         console.log(error);
//     }
//     });
// }

document.getElementById("weatherSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
      return;
    console.log(value);
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=a4f331ac9901aed573fa5b6a8a0155de";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
        console.log(json);	
        let results = "";
        results += '<div class="currentWeather"><h2 id="weatherTitle">Weather in ' + json.name + "</h2>";
        for (let i=0; i < json.weather.length; i++) {
      results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        }
        results += '<h2>' + json.main.temp + " &deg;F</h2>"
        results += "<p>"
        for (let i=0; i < json.weather.length; i++) {
      results += json.weather[i].description
      if (i !== json.weather.length - 1)
        results += ", "
        }
        results += "</p></div>";
        document.getElementById("weatherResults").innerHTML = results;
    });
    const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=a4f331ac9901aed573fa5b6a8a0155de";
  fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let forecast = "";
      for (let i=0; i < json.list.length; i++) {
	forecast += "<div class='forecastItem'><h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
  forecast += "<p>" + json.list[i].main.temp + "°</p>";
  forecast += "<p>" + json.list[i].wind.speed + "</p>";
	forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/></div>'
    }
      document.getElementById("forecastResults").innerHTML = forecast;
  });
});

