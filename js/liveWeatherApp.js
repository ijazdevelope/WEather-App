// a42a52cc7ada3b299bb58caa9aec19b5
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
// api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
let weatherApiObj = {
    key: "a42a52cc7ada3b299bb58caa9aec19b5",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
    // baseUrl: "api.openweathermap.org/data/2.5/weather"
}
console.log(weatherApiObj);
let weatherBody = document.querySelector('.weatherBody');
let input = document.querySelector('input');
/////////////////////// Function keypress starting /////////////

input.addEventListener('keypress', function (event) {
    document.querySelector('.app_main').style.background = 'rgba(240,248,255,.5)'
    if (event.keyCode == 13) {
        // console.log(input.value);
        getWeatherReport(input.value);
        weatherBody.style.display = "block";
        if (input.value == '') {
            weatherBody.style.display = "none"
            alert('Please Enter Your City Name...');
        }
    }
})
/////////////////////// Function keypress Ending /////////////
/////////////////////// Get Weather Reorts Starting /////////////
function getWeatherReport(city) {
    console.log(input.value);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a42a52cc7ada3b299bb58caa9aec19b5&metric=units`)
        .then(weatherJs => {
            return weatherJs.json()
        }).then(showWeatherReports)
}
/////////////////////// Get Weather Reorts ending ///////////////
/////////////////////// Show Weather Reorts Starting ///////////////
function showWeatherReports(weatherJs) {
    console.log(weatherJs);
    // searchData(weatherJs);
    let cities = document.querySelector('.city')
    let temprature = document.querySelector('.temp')
    let min_Max = document.querySelector('.min_Max');
    let mosam = document.querySelector('.weather');
    let smallImg = document.querySelector('.img');
    let currentWeather = document.querySelector('.weather');
    let date = document.querySelector('.date');
    let toDayDate = new Date();
    // console.log(toDayDate);

    cities.innerText = `${weatherJs.name}, ${weatherJs.sys.country}`
    temprature.innerHTML = `${Math.round(weatherJs.main.temp)}&deg;C`
    min_Max.innerHTML = `${Math.round(weatherJs.main.temp_min)}&deg;C (Min) || ${Math.floor(weatherJs.main.temp_max)}&deg;C (Max)`
    mosam.innerHTML = `${weatherJs.weather[0].main}`
    date.innerHTML = currentDateFun(toDayDate);


    if (mosam.innerText == 'Clouds' || mosam.innerText == 'Cloudy') {
        document.body.style.background = "url(images/cloudy2.gif)"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        smallImg.innerHTML = `<i class="fa fa-cloud" class='icons'></i>`
    }
    if (mosam.innerText == 'Clear') {
        // document.body.style.background = "url(images/clearSun.jpg)"
        document.body.style.background = "url(images/clear1.jpg)"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundSize = "100% 100%";
        document.body.style.backgroundPosition = "center";
    }
    if (mosam.innerText == 'Haze') {
        document.body.style.background = "url(images/haze.gif)"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    }
    if (mosam.innerText == 'Rain') {
        document.body.style.background = "url(images/rainy.gif)"
        // document.body.style.background = "url(images/rrain.gif)"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        
        // let imgPath = weatherJs.weather.icon
        // console.log(imgPath)
        // smallImg.innerHTML = `<img alt="wrong" src="http://openweathermap.org/img/wn/${weatherJs.weather[0].icon}@2x.png">`
    }
    if (mosam.innerText == 'Snow') {
        document.body.style.background = "url(images/snow.gif)"
        // document.body.style.background = "url(images/rrain.gif)"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    }
    if (mosam.innerText == 'Smoke') {
        document.body.style.background = "url(images/smoke.gif)"
        // document.body.style.background = "url(images/rrain.gif)"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    }
}
/////////////////////// Show Weather Reorts ending ///////////////
/////////////////////// Date Show starting ///////////////
function currentDateFun(dateArgument) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', "October", 'November', 'December']
    let day = days[dateArgument.getDay()];
    let currentDate = dateArgument.getDate();
    let month = months[dateArgument.getMonth()];
    let year = dateArgument.getFullYear();
    // console.log(day, month, year, currentDate);
    return `${currentDate}/ ${month}/ ${year}`
}
/////////////////////// Date Show Ending ///////////////
/////////////////////// Time & Data starting ///////////////
function set_Time() {
    let currentDate = new Date();
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let hours = document.querySelector('.hours');
    // console.log(hour);

    if (seconds < 10) { `${seconds = '0' + seconds}` } else { seconds = seconds }
    if (minutes < 10) { `${minutes = '0' + minutes}` } else { minutes = minutes }
    if (hour == 0) { `${hour = 12}` } 

    document.querySelector('.hours').innerHTML = hour;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;

    let am_pm = document.querySelector('.am-pm');
    if (hour < 12) {
        am_pm.innerHTML = 'PM'
    } else {
        am_pm.innerHTML = 'AM'
    }
    // if (hour == 0) {
    //     hours.innerHTML = '0' + hour % 12 + 1
    // } else {
    //     hours.innerHTML = hour % 12
    // }

}
setInterval(set_Time, 1000)
/////////////////////// Time & Data Ending ////////////////
/////////////////////// search Data Starting //////////////
// function searchData(data){
//     if(data){
//         data.filter(items =>{
//         let regxp = new RegExp(input.value);
//         console.log(regxp);
//         items.name.match(regxp)})
//     } else {
//         alert('no match')
//     }
// }
/////////////////////// search Data Ending //////////////// 