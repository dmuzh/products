let search = document.querySelector('.search')
let cty = document.querySelector('.cty')
let country = document.querySelector('.country')
let value = document.querySelector('.value')
let shortDesc = document.querySelector('.short-desc')
let visibility = document.querySelector('.visibility span')
let wind = document.querySelector('.wind span')
let time = document.querySelector('.time')
let sun = document.querySelector('.sun span')
let content = document.querySelector('.content')

async function changWeatherUi() {
    let capitalSearch = search.value.trim()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=&${capitalSearch}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`

    let data = await fetch(url).then(res => res.json())

    if (data.cod == 200) {
        content.classList.remove('hide')

        cty.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        value.innerText = data.main.temp
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString('VN')

    } else {
        content.classList.add('hide')
    }
}
search.addEventListener('keypress',function(e){
    if(e.code === 'enter'){
        changWeatherUi()

    }
})