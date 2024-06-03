const client = {
    id: 1,
    name: 'Azaf car'
}
const readerUrl = new URL(window.location.href);
const parameterValue = readerUrl.searchParams.get('id');

const APICar = `http://localhost:1337/api/cars/${parameterValue}?populate=*`;
const localhost = "http://localhost:1337"




document.addEventListener("DOMContentLoaded", function () {
    let vName = document.getElementById("vName")
    let vMake = document.getElementById("vMake")
    let vImage = document.getElementById("vImage")

    console.log(APICar)
    fetch(APICar)
        .then(response => response.json())
        .then(data => {
            var vdata = data.data
            console.log(vdata.attributes.MainImage.data.attributes.url)
            vName.innerHTML = vdata.attributes.Name
            vMake.innerHTML = vdata.attributes.Make
            vImage.src = localhost + vdata.attributes.MainImage.data.attributes.url
        })
        .catch(err => console.error(err));



})