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
        totalDays.innerText = numberOfDays + " jrs"
        let total = numberOfDays * vehicle.rentalRate
        totalPrice.innerText = total

        let delivery = Number(totalDelivery.innerText)
        globalTotal.innerText = total + delivery

        addRowsToTable(payments)

        const totalAmount = payments.reduce((total, payment) => {
          return total + payment.attributes.amount;
        }, 0);

        // console.log(`Total Amount: ${totalAmount}`);
        amoutReste.innerText = globalTotal.innerText - totalAmount

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }


  const apiUrl = 'https://panel.tomobila.com/api/customers'; // Replace with your actual Strapi API URL
  // const apiUrl = 'https://your-strapi-instance/api/clients'; // Replace with your actual Strapi API URL
  const clientList = document.getElementById('clientList');
  let clients = [];

  // Fetch data from Strapi API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      clients = data.data; // Store clients for further use
      renderClientList(clients);
    })
    .catch(error => console.error('Error fetching clients:', error));

  // Function to render the client list
  function renderClientList(clients) {
    clientList.innerHTML = ''; // Clear the list
    clients.forEach((client, index) => {
      const fullName = `${client.attributes.firstName} ${client.attributes.lastName}`;
      const driverLicense = client.attributes.idNumber;
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.innerHTML = `
          <div class="row align-items-center">
            <div class="col-auto">
              <!-- Avatar -->
              <div class="avatar avatar-sm">
                <span class="avatar-title rounded-circle">${client.attributes.firstName[0]}${client.attributes.lastName[0]}</span>
              </div>
            </div>
            <div class="col ms-n2">
              <!-- Title -->
              <h5 class="mb-1 name">${fullName}</h5>
              <!-- Driver License -->
              <p class="small mb-0">
                <!--
                 <span class="text-success">●</span>-->
                 ${driverLicense}
              </p>
            </div>
            <div class="col-auto">
              <!-- Button -->
              <a href="#!" class="btn btn-sm btn-white ajouter-btn" data-index="${index}">Sélectionné</a>
            </div>
          </div>
        `;
      clientList.appendChild(listItem);
    });

    // Add event listeners for all "Ajouter" buttons
    const ajouterButtons = document.querySelectorAll('.ajouter-btn');
    ajouterButtons.forEach(button => {
      button.addEventListener('click', function () {
        const clientIndex = this.getAttribute('data-index');
        const clientData = clients[clientIndex].attributes;
        fillLocataireDetails(clientData);
      });
    });
  }

  // Function to fill the Locataire details with the selected client data
  function fillLocataireDetails(client) {
    document.getElementById('contratMainDrive').textContent = `${client.firstName} ${client.lastName}`;
    document.getElementById('driverBirth').textContent = client.dateOfBirth || '---- -- --';
    document.getElementById('driverID').textContent = client.idNumber || '-----';
    document.getElementById('driverExpireID').textContent = client.idExpiration || '---- -- --';
    document.getElementById('driverLicence').textContent = client.driverLicenseNumber || '-----';
    document.getElementById('driverLicenceID').textContent = client.driverLicenseExpiration || '---- -- --';
  }

  // Search functionality
  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredClients = clients.filter(client => {
      const fullName = `${client.attributes.firstName} ${client.attributes.lastName}`.toLowerCase();
      return fullName.includes(searchTerm);
    });
    renderClientList(filteredClients);
  });
})
