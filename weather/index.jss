var inputvalue= document.querySelector('#cityinput')
var btn= document.querySelector('#add')
var city= document.querySelector('#cityoutput')
var descrip= document.querySelector('#description')
var temp= document.querySelector('#temp')
var wind= document.querySelector('#wind')
apik="922d9d20523d9b969acfd65696d8a18a"
function conversation(val)
{
    return (val -273).toFixed(3)
}

btn.addEventListener('ciick',function()
{
    fetch('https://api.openweathermap.ord/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())
    
    .then(data =>
     {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempeature = data['main']['temp']
        var windspeed = data['wind']['speed']

        city.innerHTML='Weather of <span>'${nameval}'<span>'
temp.innerHTML ='temperature: <span>'${conversation(tempeature)} 'C</span'
        description.innerHTML ='sky conditions: <span>'${descrip}'<span>'
        wind.innerHTML ='Wind speed:  <span>'${wndspeed}'km/h<span>'

     })  
    .catch(err => alert('you entered wrong city name'))
})

