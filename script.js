var weatherData = {
    "city": "Istanbul",
    "data": [
      {
        "date": "2023-07-16",
        "high": 34,
        "low": 21,
        "weather": "Sunny"
      },
      {
        "date": "2023-07-17",
        "high": 33,
        "low": 22,
        "weather": "Cloudy"
      },
      {
        "date": "2023-07-18",
        "high": 35,
        "low": 23,
        "weather": "PartlyCloudy"
      },
      {
        "date": "2023-07-19",
        "high": 35,
        "low": 23,
        "weather": "MostlySunny"
      },
      {
        "date": "2023-07-20",
        "high": 36,
        "low": 25,
        "weather": "Cloudy"
      },
      {
        "date": "2023-07-21",
        "high": 32,
        "low": 23,
        "weather": "Rainy"
      },
      {
        "date": "2023-07-22",
        "high": 34,
        "low": 21,
        "weather": "Sunny"
      },
      {
        "date": "2023-07-23",
        "high": 34,
        "low": 21,
        "weather": "Sunny"
      },
      {
        "date": "2023-07-24",
        "high": 34,
        "low": 21,
        "weather": "Sunny"
      },
      {
        "date": "2023-07-25",
        "high": 33,
        "low": 22,
        "weather": "Cloudy"
      },
      {
        "date": "2023-07-26",
        "high": 35,
        "low": 23,
        "weather": "PartlyCloudy"
      },
      {
        "date": "2023-07-27",
        "high": 35,
        "low": 23,
        "weather": "MostlySunny"
      },
      {
        "date": "2023-07-28",
        "high": 36,
        "low": 25,
        "weather": "Cloudy"
      },
      {
        "date": "2023-07-29",
        "high": 32,
        "low": 23,
        "weather": "Rainy"
      },
      {
        "date": "2023-07-30",
        "high": 34,
        "low": 21,
        "weather": "Sunny"
      },
      {
        "date": "2023-07-31",
        "high": 34,
        "low": 21,
        "weather": "Sunny"
      }
    ]
  };
  
  var selectedDate = null;
  
  var weekdays = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];
  var weatherIcons = {
    Sunny: "☀️",
    Cloudy: "☁️",
    PartlyCloudy: "⛅️",
    MostlySunny: "🌤️",
    Rainy: "🌧️",
  };
  
  var tableBody = document.querySelector(".weather-table tbody");
  
  for (var i = 0; i < weatherData.data.length; i += 7) {
    var row = document.createElement("tr");
  
    for (var j = i; j < i + 7; j++) {
      if (j < weatherData.data.length) {
        var { date, high, low, weather } = weatherData.data[j];
        var day = date.split("-")[2];
  
        var cell = document.createElement("td");
        cell.className = "weatherItem";
        cell.setAttribute("data-date", date);
        cell.addEventListener("click", function () {
          var selected = weatherData.data.find(function (item) {
            return item.date === this.getAttribute("data-date");
          }, this);
          setSelectedDate(selected);
        });
  
        var weatherItem = document.createElement("div");
        weatherItem.className = "weather-item";
  
        var weatherDate = document.createElement("h2");
        weatherDate.className = "weatherDate";
        var weatherIcon = document.createElement("span");
        weatherIcon.className = "weatherIcon";
        weatherIcon.innerText = weatherIcons[weather];
  
        var weatherTemp = document.createElement("p");
        weatherTemp.className = "weatherTemp";
        weatherTemp.innerText = high + "°C ~ " + low + "°C";
  
        weatherDate.innerText = day;
        weatherDate.appendChild(weatherIcon);
        weatherItem.appendChild(weatherDate);
        weatherItem.appendChild(weatherTemp);
        cell.appendChild(weatherItem);
        row.appendChild(cell);
      }
    }
  
    tableBody.appendChild(row);
  }
  
  var cardContainer = document.querySelector(".cardContainer");
  var dateElement = cardContainer.querySelector(".date");
  var cityElement = cardContainer.querySelector(".city");
  var weatherElement = cardContainer.querySelector(".weather");
  var weatherIconElement = cardContainer.querySelector(".weatherIcon");
  var tempElement = cardContainer.querySelector(".temp");
  var minTempElement = cardContainer.querySelector(".minTemp");
  var maxTempElement = cardContainer.querySelector(".maxTemp");
  
  var setSelectedDate = function (selected) {
    selectedDate = selected;
    dateElement.innerText = selected.date;
    cityElement.innerText = weatherData.city;
    weatherElement.innerText = selected.weather;
    weatherIconElement.innerText = weatherIcons[selected.weather];
    tempElement.innerText = selected.high + "°C";
    minTempElement.innerText = selected.low + "°";
    maxTempElement.innerText = selected.high + "°";
  };
  
  // İlk seçili tarihi belirlemek için setSelectedDate işlevini çağırın
  setSelectedDate(weatherData.data[0]);
  