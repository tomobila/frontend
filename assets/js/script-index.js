const APICars = `https://panel.tomobila.com/api/vehicles/?populate=*`;
const APIBookings = `https://panel.tomobila.com/api/bookings/?populate[vehicle][populate]=*&populate[payments]=*&populate[mainDriver]=*`;
const APICustomers = `https://panel.tomobila.com/api/customers/`;
const APIPayments = `https://panel.tomobila.com/api/payments/`;

const localhost = "https://panel.tomobila.com"

const paginatedLenght = 5
var loaderEmails = '<div class="position-absolute top-0 left-0 w-100 h-100 bg-white">'
for (let i = 0; i < paginatedLenght; i++) {
  loaderEmails += `
                  <div class="mail__skeleton d-flex flex-row p-2">
                    <div class="skeleton-star me-4"></div>
                    <div class="skeleton-sender me-4"></div>
                    <div class="skeleton-subject me-4 flex-fill"></div>
                    <div class="skeleton-star me-4"></div>
                    <div class="skeleton-date"></div>
                  </div>`
}
loaderEmails += `</div>`

function logout() {
  localStorage.removeItem('authToken');
  window.location.href = 'index.html';
}

function determineColorBasedOnResource(resourceStatus) {
  const resourceColorMap = {
    'Pending': 'orange',
    'Confirmed': 'green',
    'Cancelled': '#e63757'
  };
  return resourceColorMap[resourceStatus] || '#1a49f8'; // Fallback color
}

function calculatePaymentComparison(booking) {
  const totalCost = booking.attributes.totalCost;

  // Calculate the total payments made
  const totalPayments = booking.attributes.payments.data.reduce((sum, payment) => {
    if (payment.attributes.status === "Completed") {
      return sum + payment.attributes.amount;
    }
    return sum;
  }, 0);

  // Compare total payments with total cost
  const difference = totalCost - totalPayments;

  // Extract mainDriver's name
  const mainDriverName = `${booking.attributes.mainDriver.data?.attributes.firstName || ''} ${booking.attributes.mainDriver.data?.attributes.lastName || ''}`.trim();
  const mainDriverPhone = `${booking.attributes.mainDriver.data?.attributes.phone || ''}`.trim()

  // Result
  return {
    bookingId: booking.id,
    totalCost: totalCost,
    totalPayments: totalPayments,
    isPaidInFull: difference <= 0,
    amountDue: difference > 0 ? difference : 0,
    mainDriverName: mainDriverName,
    mainDriverPhone: mainDriverPhone
  };
}

document.addEventListener("DOMContentLoaded", async function () {
  window.onload = function () {
    const token = localStorage.getItem('authToken');

    if (!token) {
      // If there's no token, redirect to the login page
      window.location.href = 'index.html';
    }
  };

  const token = localStorage.getItem('authToken'); // Retrieve the token from localStorage

  var calendarEl = document.getElementById('calendar');

  Promise.all([
    fetch(APICars, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }),
    fetch(APIBookings, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }),
    fetch(APICustomers, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }),
    fetch(APIPayments, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
  ])
    .then(responses => Promise.all(responses.map(res => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })))

    .then(data => {
      const [resourcesData, eventsData, customersData, paymentsData] = data;

      const totalVehicles = resourcesData.meta.pagination.total;
      const totalBookings = eventsData.meta.pagination.total;
      const totalCustomers = customersData.meta.pagination.total;

      let totalAmount = 0;

      paymentsData.data.forEach(item => {
        totalAmount += item.attributes.amount;
      });

      let vehicles = resourcesData.data
      console.log(vehicles);
      const statusCounts = resourcesData.data.reduce((acc, car) => {
        const status = car.attributes.status;
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      }, {});

      const dataDonuts = {
        labels: Object.keys(statusCounts),
        datasets: [{
          data: Object.values(statusCounts),
          backgroundColor: [
            'green',  // Color for "Available"
            '#1a49f8',
            'red'// Color for "Rented"
          ],
          options: {
            responsive: true,
          }
        }]
      };

      const ctx = document.getElementById('carStatus').getContext('2d');
      const carStatusDonutChart = new Chart(ctx, {
        type: 'doughnut',
        data: dataDonuts,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              enabled: false,
            }
          },
          cutout: '80%',
        }
      });

      document.getElementById("totalBooking").innerHTML = totalBookings
      document.getElementById("totalCustomer").innerHTML = totalCustomers
      document.getElementById("totalVehicle").innerHTML = totalVehicles
      document.getElementById("totalbenif").innerHTML = totalAmount

      // Transform resources
      const ressources = resourcesData.data.map(item => ({
        id: item.id,
        title: item.attributes.name,
        img: localhost + item.attributes.mainImage.data.attributes.url,
      }));

      // Transform events
      const events = eventsData.data.map(event => ({
        id: event.id,
        title: event.attributes.mainDriver.data.attributes.firstName + " " + event.attributes.mainDriver.data.attributes.lastName,
        start: event.attributes.startDate,
        end: event.attributes.endDate,
        resourceId: event.attributes.vehicle.data.id,
        eventColor: determineColorBasedOnResource(event.attributes.status),
      }));

      var calendar = new FullCalendar.Calendar(calendarEl, {
        slotLabelFormat: [
          { day: 'numeric' },
        ],
        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
        headerToolbar: {
          left: 'title',
          center: '',
          right: 'prev,next resourceTimelineMonth,next15Days,next30Days'
        },
        views: {
          next15Days: {
            type: 'resourceTimeline',
            duration: { days: 15 },
            buttonText: '15 days'
          },
          next30Days: {
            type: 'resourceTimeline',
            duration: { days: 30 },
            buttonText: '30 days'
          }
        },
        initialView: 'resourceTimelineMonth',
        aspectRatio: 3.5,
        resources: ressources,
        events: events,
        initialDate: new Date(),
        editable: true,
        selectable: true,
        resourceAreaHeaderContent: 'Vehicules',
        dayCellContent: function (arg) {
          arg.dayNumberText = arg.dayNumberText.replace(/.*(\d{1,2}).*/, '$1');
        },
        windowResize: function (view) {
          console.log('The calendar has adjusted to a window resize');
        },
        resourceLabelContent: function (arg) {
          let resource = arg.resource;
          let container = document.createElement('div');
          container.classList.add('d-flex', 'align-items-center');

          let container2 = document.createElement('div');
          container2.classList.add('avatar', 'avatar-4by3', 'align-middle', 'me-3');

          let img = document.createElement('img')
          img.classList.add('avatar-img', 'rounded', 'p-1')
          img.src = resource.extendedProps.img;

          let title = document.createElement('p');
          title.classList.add('m-0');
          title.innerText = resource.title;

          container2.appendChild(img)
          container.appendChild(container2);
          container.appendChild(title);

          return { domNodes: [container] };
        },
        eventContent: function (arg) {
          let event = arg.event;
          let now = new Date();
          let start = event.start;
          let end = event.end;

          let progress = 0;
          if (now > start && now < end) {
            progress = ((now - start) / (end - start)) * 100;
          } else if (now >= end) {
            progress = 100;
          }

          let customHtml = `
            <div class="d-flex customHtml " style="background:${event.extendedProps.eventColor}">
              <div class="avatar avatar-xs me-3">
                <img src="assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle" alt="...">
              </div>
              <div class="d-flex flex-1 w-100">
                <div class="fc-event-progress-container w-100">
                  <div class="fc-event-title">${event.title}</div>
                  <div class="fc-event-progress-bar bg-white h-2" style="width: ${progress}%" ></div>
                </div>
              </div>
            </div>
          `;
          return { html: customHtml };
        }
      });

      function updateAspectRatio() {
        if (window.innerWidth < 600) {
          calendar.setOption('aspectRatio', 0.75);
          calendar.setOption('headerToolbar', {
            left: 'title prev,next',
            center: '',
            right: ''
          });
        } else {
          calendar.setOption('aspectRatio', 3.5);
        }
      }

      window.addEventListener('resize', updateAspectRatio);
      updateAspectRatio();
      calendar.render();

    })
    .catch(error => {
      console.error('Failed to fetch data:', error);
      if (error.message.includes('401')) {
        window.location.href = 'index.html'; // Redirect to login if unauthorized
      }
    });

  const columns = [
    {
      data: 'attributes.createdAt',
      render: function (row, type, data) {
        return `
          <div class="d-flex flex-column align-items-center justify-content-center">
            <time>${moment(row).format('DD MMM YYYY')}</time>
            <time>${moment(row).format('HH:mm:ss')}</time>
          </div>
        `;
      }
    },
    {
      data: 'attributes.vehicle',
      render: function (data, row, type) {
        let licence = data.data.attributes.licensePlate
        let parts = licence.split("-");
        return `
          <div class="d-flex align-items-center mb-2">
            <div class="avatar avatar-4by3 align-middle me-3">
              <img src="${localhost}${data.data.attributes.mainImage.data.attributes.url} " class="avatar-img rounded p-1">
            </div>
            <div class="d-flex flex-column align-items-center">
              <h4 class="m-2">${data.data.attributes.name}</h4>
              <div class="mb-3 px-2 border-gray border border-black d-inline-block rounded-1 fw-bold">
                <span class="border-end border-gray px-2">${parts[0]}</span>
                <span class="border-end border-gray px-2">${parts[1]}</span>
                <span>${parts[2]}</span>
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      data: 'id',
      render: function (row, type, data) {
        return `
          <div>
            <time>${moment(data.attributes.startDate).format('DD MMM YYYY')}</time> - 
            <time>${moment(data.attributes.startDate).format('HH:mm:ss')}</time>
          </div>
          <div>
            <time>${moment(data.attributes.endDate).format('DD MMM YYYY')}</time> - 
            <time>${moment(data.attributes.endDate).format('HH:mm:ss')}</time>
          </div>
        `;
      }
    },
    {
      data: 'attributes.mainDriver',
      render: function (data) {
        return `
          <div class="d-flex align-items-center flex-column">
            <h4 class="fw-normal mb-1">${data.data.attributes.firstName} ${data.data.attributes.lastName}</h4>
            <a href="tel:${data.data.attributes.phone}" class="text-muted">${data.data.attributes.phone}</a>
          </div>
        `;
      }
    },
    {
      data: 'attributes.totalCost',
    },
    {
      data: 'attributes',
      render: function (data) {
        let tpayment = data.payments.data;
        let totalAmount = 0;
        tpayment.forEach(payment => {
          totalAmount += payment.attributes.amount;
        });
        let total = data.totalCost;
        const difference = total - totalAmount;
        const percentageIncrease = (totalAmount / total) * 100;

        return `
          <div class="row align-items-center g-0">
            <div class="col-auto">
              <span class="me-2">${percentageIncrease.toFixed(0)}%</span>
            </div>
            <div class="col">
              <div class="progress progress-sm">
                <div class="progress-bar ${percentageIncrease == 100 ? "bg-success" : "bg-warning"}" role="progressbar" style="width: ${percentageIncrease}%" aria-valuenow="${percentageIncrease}" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        `;
      }
    },
    {
      data: 'attributes.status',
      render: function (data) {
        const VStatus = (statu) => {
          switch (statu) {
            case "Pending":
              return `<span class="badge bg-warning">${statu}</span>`;
            case "Cancelled":
              return `<span class="badge bg-danger">${statu}</span>`;
            case "Confirmed":
              return `<span class="badge bg-success">${statu}</span>`;
            default:
              return `<span class="badge bg-primary">${statu}</span>`;
          }
        }
        return `${VStatus(data)}`;
      }
    },
    {
      data: 'id',
      render: function (data) {
        return `
          <div class="d-flex align-items-center">
            <a href="n-contrat.html?id=${data}" class="btn btn-white border-0 rounded-circle ms-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Voir">
              <span class="fe fe-eye"></span>
            </a>
          </div>
        `;
      }
    }
  ];

  var myData = {};

  const initDatatable = new DataTable('#listContrats', {
    processing: true,
    bPaginate: false,
    columns: columns,
    pageLength: 4,
    bFilter: true,
    searching: false,
    language: {
      searchPlaceholder: "Recherche",
      processing: loaderEmails
    },
    bInfo: true,
    order: [[0, "desc"]],
    ajax: {
      url: APIBookings,
      type: "GET",
      data: function (d) {
        return $.extend(d, myData);
      },
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + token); // Add the token
      }
    },
  });

  async function fetchUnpaidBookings() {
    try {
      const response = await fetch('https://panel.tomobila.com/api/bookings/?populate[payments]=*&populate[mainDriver]=*', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const bookings = data.data;
      unpaidBookings = bookings
        .map(calculatePaymentComparison)
        .filter(result => result.amountDue > 0);

      populateDataTable(unpaidBookings);

      return unpaidBookings;
    } catch (error) {
      console.error('Error fetching or processing bookings:', error);
      if (error.message.includes('401')) {
        window.location.href = 'index.html'; // Redirect to login if unauthorized
      }
    }
  }

  function populateDataTable(data) {
    $('#unpaidBookingsTable').DataTable({
      data: data,
      pageLength: 6,
      searching: false,
      bPaginate: false,
      language: {
        processing: loaderEmails
      },
      order: [[2, "desc"]],
      columns: [
        {
          data: 'mainDriverName',
          render: function (data, type, row) {
            return `
              <div class="avatar avatar-xs me-3">
                <span class="avatar-title rounded-circle">
                  ${data.charAt(0).toUpperCase()}${data.charAt(0).toUpperCase()}
                </span>
              </div>
              <a class="text-primary py-4" href="n-contrat.html?id=${row.bookingId}" target="_blank">#${row.bookingId} ${data}</a>
            `;
          }
        },
        { data: 'amountDue' },
        {
          data: 'totalCost',
          render: function (data, type, row) {
            let due = row.amountDue;
            let totalCost = row.totalCost;
            const percentageIncrease = (due / totalCost) * 100;
            return `
              <div class="row align-items-center g-0">
                <div class="col-auto">
                  <span class="me-2 small">${percentageIncrease.toFixed(0)}%</span>
                </div>
                <div class="col">
                  <div class="progress progress-sm">
                    <div class="progress-bar ${percentageIncrease == 100 ? "bg-warning" : "bg-secondary"}" role="progressbar" style="width: ${percentageIncrease}%" aria-valuenow="${percentageIncrease}" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            `;
          }
        },
        {
          data: 'totalCost',
          render: function (data) {
            return `<div class="text-center">${data}</div>`;
          }
        },
        {
          data: 'mainDriverName',
          render: function (data, type, row) {
            return `<a class="btn btn-white border-0 rounded-circle ms-0" href="tel:${row.mainDriverPhone}" target="_blank"><span class="fe fe-phone"></span></a>`;
          }
        }
      ]
    });
  }

  fetchUnpaidBookings();
});
