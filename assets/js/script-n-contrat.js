const readerUrl = new URL(window.location.href);
const parameterValue = readerUrl.searchParams.get('id');
console.log(parameterValue)

const APIContrats = `https://panel.tomobila.com/api/bookings/${parameterValue}/?populate[vehicle][populate]=*&populate[secondDriver][populate]=*&populate[mainDriver][populate]=*&populate[payments][populate]=*`;


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
        let driver2 = data.data.attributes.mainDriver.data
        console.log(data);

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

        const contratMainDrive2 = document.getElementById('contratMainDrive2');
        const driverBirth2 = document.getElementById('driverBirth2');
        const driverID2 = document.getElementById('driverID2');
        const driverExpireID2 = document.getElementById('driverExpireID2');
        const driverLicence2 = document.getElementById('driverLicence2');
        const driverLicenceID2 = document.getElementById('driverLicenceID2');




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

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }


})
