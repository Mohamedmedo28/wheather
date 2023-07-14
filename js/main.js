let submit=document.getElementById('submit')
let search=document.getElementById('search')


let tody=document.getElementById('tody')
let month=document.getElementById('month')
let cityLocation=document.getElementById('cityLocation')
let grade=document.getElementById('grade')
let todayIcon=document.getElementById('todayIcon')
let description=document.getElementById('description')
let humidty=document.getElementById('humidty')
let wind=document.getElementById('wind')
let compass=document.getElementById('compass')


let nextDay=document.getElementById('nextDay')
let nextDaytwo=document.getElementById('nextDaytwo')
let nextDayIcon=document.getElementById('nextDayIcon')
let nextDayIcontwo=document.getElementById('nextDayIcontwo')
let maxDegreeone=document.getElementById('maxDegreeone')
let maxDegreetwo=document.getElementById('maxDegreetwo')
let minDegreeone=document.getElementById('minDegreeone')
let minDegreetwo=document.getElementById('minDegreetwo')
let nextDayDescriptionone=document.getElementById('nextDayDescriptionone')
let nextDayDescriptiontwo=document.getElementById('nextDayDescriptiontwo')
//
let apiResponse
let responseData






  monthName = ['January','February','March','April','May','June','July','August','September','October','November','December'],
   days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
];



async function getdata(currentCity='cairo'){
  apiResponse =await fetch(`http://api.weatherapi.com/v1/forecast.json?key=%206742e14779eb4b399fd193857232402&q=${currentCity}&days=3&aqi=no&alerts=no`)
  responseData=await apiResponse.json()
  console.log(responseData)
  displayTodayWeather()


  
}
getdata()





function displayTodayWeather(){
    let date =new Date();
    // console.log(monthName[date.getMonth()])
    tody.innerHTML = days[date.getDay()]
    month.innerHTML = `${date.getDate()} ${monthName[date.getMonth()]}`
    cityLocation.innerHTML = responseData.location.name
    grade.innerHTML = responseData.current.temp_c
    todayIcon.setAttribute("src",`https:${responseData.current.condition.icon}`)
    description.innerHTML =responseData.current.condition.text
    humidty.innerHTML=responseData.current.humidity
    wind.innerHTML = responseData.current.wind_kph
    compass.innerHTML = responseData.current.wind_dir

    nextDay.innerHTML =days[new Date(responseData.forecast.forecastday[1].date).getDay()]
    nextDaytwo.innerHTML=days[new Date(responseData.forecast.forecastday[2].date).getDay()]

    nextDayIcon.setAttribute("src",`https:${responseData.forecast.forecastday[1].day.condition.icon}`)
    nextDayIcontwo.setAttribute("src",`https:${responseData.forecast.forecastday[2].day.condition.icon}`)

    maxDegreeone.innerHTML=responseData.forecast.forecastday[1].day.maxtemp_c
    maxDegreetwo.innerHTML=responseData.forecast.forecastday[2].day.maxtemp_c

    minDegreeone.innerHTML=responseData.forecast.forecastday[1].day.mintemp_c;
    minDegreetwo.innerHTML=responseData.forecast.forecastday[2].day.mintemp_c;

    nextDayDescriptionone.innerHTML=responseData.forecast.forecastday[1].day.condition.text
    nextDayDescriptionone.innerHTML=responseData.forecast.forecastday[2].day.condition.text



    
}

search.addEventListener("keyup",function(){
  currentCity= search.value;
 getdata(currentCity);
})

// submit.addEventListener("click",function(){
//   currentCity= search.value;
//  console.log( currentCity);
//  getdata(currentCity);
// })
