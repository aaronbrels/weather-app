let longitude = ""
let latitude = ""

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
} else {
    document.getElementById("demo").innerHTML = "Geolocation not supported"
}




function showPosition(position) {
     latitude = position.coords.latitude
    longitude = position.coords.longitude
    document.getElementById("latitude").innerHTML = latitude
    document.getElementById("longitude").innerHTML = longitude
}