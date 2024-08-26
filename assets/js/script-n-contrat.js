const readerUrl = new URL(window.location.href);
const parameterValue = readerUrl.searchParams.get('id');
// console.log(parameterValue)

const APIContrats = `https://panel.tomobila.com/api/bookings/${parameterValue}/?populate[vehicle][populate]=*&populate[secondDriver][populate]=*&populate[mainDriver][populate]=*&populate[payments][populate]=*`;
const URLApi = "https://panel.tomobila.com"

document.addEventListener("DOMContentLoaded", async function () {

  if (parameterValue > 0) {
    fetch(APIContrats)

      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {

        let dataBooking = data.data
        let driver1 = data.data.attributes.mainDriver.data
        let driver2 = data.data.attributes.secondDriver.data
        let vehicle = data.data.attributes.vehicle.data.attributes
        let payments = dataBooking.attributes.payments.data
        console.log(dataBooking);

        const contratID = document.getElementById('contratID');
        const contratID2 = document.getElementById('contratID2');
        const contratStatus = document.getElementById('contratStatus');
        const contratCreated = document.getElementById('contratCreated');
        // Driver details
        const contratMainDrive = document.getElementById('contratMainDrive');
        const driverBirth = document.getElementById('driverBirth');
        const driverID = document.getElementById('driverID');
        const driverExpireID = document.getElementById('driverExpireID');
        const driverLicence = document.getElementById('driverLicence');
        const driverLicenceID = document.getElementById('driverLicenceID');
        // Driver 2
        const contratMainDrive2 = document.getElementById('contratMainDrive2');
        const driverBirth2 = document.getElementById('driverBirth2');
        const driverID2 = document.getElementById('driverID2');
        const driverExpireID2 = document.getElementById('driverExpireID2');
        const driverLicence2 = document.getElementById('driverLicence2');
        const driverLicenceID2 = document.getElementById('driverLicenceID2');

        // Vehicle
        const vehicleName = document.getElementById('vehicleName');
        const vehicleMainImage = document.getElementById('vehicleMainImage');
        const vehicleMatricule = document.getElementById('vehicleMatricule');
        const vehicleYear = document.getElementById('vehicleYear');

        contratID.innerHTML = "#AZ-" + dataBooking.id
        contratID2.innerHTML = "#AZ-" + dataBooking.id
        contratStatus.innerText = dataBooking.attributes.status
        contratCreated.innerHTML = moment(dataBooking.attributes.createdAt).format('DD MMM YYYY HH:MM')

        contratMainDrive.innerText = driver1.attributes.firstName + " " + driver1.attributes.lastName
        driverBirth.innerText = driver1.attributes.DateOfBirth
        driverID.innerText = driver1.attributes.idNumber
        driverExpireID.innerText = driver1.attributes.idExpiration
        driverLicence.innerText = driver1.attributes.driverLicenseNumber
        driverLicenceID.innerText = driver1.attributes.driverLicenseExpiration

        contratMainDrive2.innerText = `${driver2?.attributes?.firstName || ''} ${driver2?.attributes?.lastName || '-- -- '}`;
        driverBirth2.innerText = driver2?.attributes.DateOfBirth || '---- -- -- '
        driverID2.innerText = driver2?.attributes.idNumber || '----'
        driverExpireID2.innerText = driver2?.attributes.idExpiration || '---- -- -- '
        driverLicence2.innerText = driver2?.attributes.driverLicenseNumber || '------'
        driverLicenceID2.innerText = driver2?.attributes.driverLicenseExpiration || '---- -- --'

        vehicleName.innerText = vehicle.name
        vehicleMainImage.src = URLApi + vehicle.mainImage.data.attributes.formats.small.url
        let licence = vehicle.licensePlate
        let parts = licence.split("-");

        vehicleMatricule.innerHTML =
          `<div class="mb-3 px-2 border-gray border border-black d-inline-block rounded-1 fw-bold">
        <span class="border-end border-gray px-2">${parts[0]}</span>
        <span class="border-end border-gray px-2">${parts[1]}</span>
        <span>${parts[2]}</span>
        </div>`;

        vehicleYear.innerText = moment(vehicle.year).format("YYYY")
        // console.log('=====================================');
        // console.log(vehicle.name);
        // console.log('===================================');


      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }


})
