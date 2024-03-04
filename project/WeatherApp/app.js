//api를 통해서 데이터 가져오기
const api ={
    key:"process.env.API_KEY;",
    base:"https://api.openweathermap.org/data/2.5/"
}

const searchBox =document.querySelector('.search-box');
searchBox.addEventListener('keypress',setQuery);

function setQuery(e){
    if(e.key === 'Enter'){
        getResults(searchBox.value);
        console.log(searchBox.value);
        searchBox.value='';
    }
}
async function getResults(query){
    let response = await fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`);
    let weatherData = await response.json();
    displayResults(weatherData);
}

//가져온 데이터 화면에 보여주기
function displayResults(weather){
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name.toUpperCase()},${weather.sys.country.toUpperCase()}`;
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp).toFixed(0)}°C`;

    // 날씨 아이콘 URL 구성
    let iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
    let weatherElement = document.querySelector('.current .weather');
    weatherElement.innerHTML = `${weather.weather[0].main} <img src="${iconUrl}" alt="Weather icon">`;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°C /${Math.round(weather.main.temp_max)}°C`
}

function dateBuilder(d){
    let months =[
        "January","February","March","April","May","June","July","August","September","October","November","December"
    ];
    let days =["Sunday", "Monday", "Tuseday", "Wednesday","Tuesday","Friday","Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month =months[d.getMonth()];
    let year =d.getFullYear();
    return `${day} ${date} ${month} ${year}`
}