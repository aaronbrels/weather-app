
// NEED TO FIX GEOLOCATOR. IN ORDER FOR WEATHER SERVICE API TO WORK MUST NOT BE MORE THAN FOUR DECIMAL POINTS


// IN ORDER TO SLICE METHOD MUST FIRST CONVERT TO STRING. THOUGH IF I DO THAT WILL IT MESS UP THE FETCH

// let longitudeNumber = ""
// let latitudeNumber = ""

// let longitudeString = longitudeNumber.toString()
// console.log(longitudeString)



if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
} else {
    document.getElementById("demo").innerHTML = "Geolocation not supported"
}




function showPosition(position) {
     let longitudeNumber = position.coords.longitude
     let latitudeNumber = position.coords.latitude
     let longitudeString = longitudeNumber.toString()
     let latitudeString = latitudeNumber.toString()
    console.log(longitudeString)
    let longSlice = longitudeString.slice(0,8)
    console.log(longSlice)
    let latSlice = latitudeString.slice(0,7)
    console.log(latSlice)
    let backToNumber = parseFloat(longSlice)
    console.log(backToNumber)

    document.getElementById("longitude").innerHTML = longitudeNumber
    document.getElementById("latitude").innerHTML = latitudeNumber
    
}




fetch("https://api.weather.gov/points/39.7216,-86.1538")
.then(response => response.json())
.then(data => {
    console.log(data)
    let forecast = "https://api.weather.gov/gridpoints/LWX/96,70/forecast"
    fetch(forecast)
    .then(response => response.json())
    .then(forecastData => {
        console.log(forecastData)
    })
})