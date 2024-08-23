const readerUrl = new URL(window.location.href);
const parameterValue = readerUrl.searchParams.get('id');
console.log(parameterValue)

const APIContrats = `https://panel.tomobila.com/api/bookings/${parameterValue}/?populate[vehicle][populate]=*&populate[mainDriver][populate]=*&populate[payments][populate]=*`;



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
        console.log(driver1);


        const contratID = document.getElementById('contratID');
        const contratID2 = document.getElementById('contratID2');
        const contratStatus = document.getElementById('contratStatus');
        const contratCreated = document.getElementById('contratCreated');
        const contratMainDrive = document.getElementById('contratMainDrive');


        contratID.innerHTML = "#AZ-" + dataBooking.id
        contratID2.innerHTML = "#AZ-" + dataBooking.id
        contratStatus.innerText = dataBooking.attributes.status
        contratCreated.innerHTML = moment(dataBooking.attributes.createdAt).format('DD MMM YYYY HH:MM')
        contratMainDrive.innerText = driver1.attributes.firstName + " " + driver1.attributes.lastName
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }


})
