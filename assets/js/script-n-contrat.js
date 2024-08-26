const readerUrl = new URL(window.location.href);
const parameterValue = readerUrl.searchParams.get('id');
// console.log(parameterValue)

const APIContrats = `https://panel.tomobila.com/api/bookings/${parameterValue}/?populate[vehicle][populate]=*&populate[secondDriver][populate]=*&populate[mainDriver][populate]=*&populate[payments][populate]=*`;
const URLApi = "https://panel.tomobila.com"


function addRowsToTable(dataArray) {
  const tableBody = document.getElementById('payment-table-body');

  dataArray.forEach(paymentData => {
    const paymentDate = moment(paymentData.attributes.paymentDate).format("DD MMM YYYY HH:MM");
    const paymentMethod = paymentData.attributes.paymentMethod;
    const amount = paymentData.attributes.amount;

    // Create a new row
    const newRow = `<tr>
                      <td class="px-0 text-end">${paymentDate}</td>
                      <td class="px-0 text-center">${paymentMethod}</td>
                      <td class="px-0 text-end">${amount}</td>
                  </tr>`;

    // Insert the new row into the table body
    tableBody.innerHTML += newRow;
  });
}

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
        console.log(payments);

        contratID.innerHTML = "#AZ-" + dataBooking.id
        contratID2.innerHTML = "#AZ-" + dataBooking.id
        contratStatus.innerText = dataBooking.attributes.status
        contratCreated.innerHTML = moment(dataBooking.attributes.createdAt).format('DD MMM YYYY HH:MM')
        // Driver details
        contratMainDrive.innerText = driver1.attributes.firstName + " " + driver1.attributes.lastName
        driverBirth.innerText = driver1.attributes.DateOfBirth
        driverID.innerText = driver1.attributes.idNumber
        driverExpireID.innerText = driver1.attributes.idExpiration
        driverLicence.innerText = driver1.attributes.driverLicenseNumber
        driverLicenceID.innerText = driver1.attributes.driverLicenseExpiration
        // Driver 2
        contratMainDrive2.innerText = `${driver2?.attributes?.firstName || ''} ${driver2?.attributes?.lastName || '-- -- '}`;
        driverBirth2.innerText = driver2?.attributes.DateOfBirth || '---- -- -- '
        driverID2.innerText = driver2?.attributes.idNumber || '----'
        driverExpireID2.innerText = driver2?.attributes.idExpiration || '---- -- -- '
        driverLicence2.innerText = driver2?.attributes.driverLicenseNumber || '------'
        driverLicenceID2.innerText = driver2?.attributes.driverLicenseExpiration || '---- -- --'
        // vehicle
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

        // Livraison
        checkCarGasoil.value = dataBooking.attributes.initialFuelLevel
        inGasoil.innerText = dataBooking.attributes.initialFuelLevel + "%"
        inGasoilP.setAttribute("style", `width:${dataBooking.attributes.initialFuelLevel}%`)
        checkCarHour.value = moment(dataBooking.attributes.startDate).format("HH:MM")
        checkCarDate.value = moment(dataBooking.attributes.startDate).format("DD MMM YYYY")
        inDate.innerText = moment(dataBooking.attributes.startDate).format("DD MMM YYYY") + " " + moment(dataBooking.attributes.startDate).format("HH:MM")

        // // Reception
        outDate.innerText = moment(dataBooking.attributes.endDate).format("DD MMM YYYY") + " " + moment(dataBooking.attributes.endDate).format("HH:MM")
        checkOutCarGasoil.value = dataBooking.attributes.returnFuelLevel == null ? 0 : dataBooking.attributes.returnFuelLevel
        checkOutCarDate.value = moment(dataBooking.attributes.endDate).format("DD MMM YYYY")
        checkOutCarHour.value = moment(dataBooking.attributes.endDate).format("HH:MM")
        outGasoil.innerText = dataBooking.attributes.returnFuelLevel == null ? 0 + "%" : dataBooking.attributes.returnFuelLevel + "%"
        outGasoilP.setAttribute("style", `width:${dataBooking.attributes.returnFuelLevel}%`)

        // Billing
        const numberOfDays = moment(dataBooking.attributes.endDate).diff(moment(dataBooking.attributes.startDate), 'days');
        totalName.innerText = vehicle.name
        totalDays.innerText = numberOfDays
        let total = numberOfDays * vehicle.rentalRate
        totalPrice.innerText = total

        let delivery = Number(totalDelivery.innerText)
        globalTotal.innerText = total + delivery


        addRowsToTable(payments)

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }


})
