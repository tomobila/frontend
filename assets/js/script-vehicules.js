const client = {
  id: 1,
  name: 'Azaf car'
}

// Replace with actual token retrieval from localStorage
const token = localStorage.getItem('authToken');

const APICars = `https://panel.tomobila.com/api/vehicles/?populate=*`;
const APICar = `http://localhost:1338/api/vehicles/`;
const fallbackImageUrl = 'assets/img/default_lrg.jpg';

const localhost = "https://panel.tomobila.com";

const getVehicles = () => {
  fetch(APICars, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`, // Add the Bearer token
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      let count = data.data.length;
      console.log(data.data);

      if (count === 0) {
        console.log("0 cars found");
        setTimeout(() => {
          carsCard.innerHTML = noCar;
        }, 1500);
      } else {
        setTimeout(() => {
          buildCarCard(data.data);
        }, 1500);
      }
    })
    .catch(err => console.error(err));
}

document.addEventListener("DOMContentLoaded", function () {
  const columns = [
    {
      data: 'id',
      className: "",
      render: function (data, type, row) {
        const imageUrl = row.attributes.mainImage && row.attributes.mainImage.data && row.attributes.mainImage.data.attributes && row.attributes.mainImage.data.attributes.url
          ? `${localhost}${row.attributes.mainImage.data.attributes.url}`
          : fallbackImageUrl;

        return `
          <div class="d-flex align-items-center mb-2">
              <div class="avatar avatar-4by3 align-middle me-3" >
                  <img src="${imageUrl}" class="avatar-img rounded p-1">
              </div>
              <p class='m-0'>${row.attributes.name}</p>
          </div>`;
      },
    },
    {
      data: 'attributes.make',
      render: function (data) {
        return `
          <div class="d-flex align-items-end justify-content-start">
            <div class="avatar avatar-sm" title="${data}" style="background-image: url(../assets/img/brands/${data}.png); background-repeat: no-repeat; background-size: contain;">
            </div>
          </div>`;
      }
    },
    {
      data: 'attributes.model',
    },
    {
      data: 'attributes.category',
    },
    {
      data: 'attributes.licensePlate',
    },
    {
      data: 'attributes.fuelType',
    },
    {
      data: 'id',
      render: function (data, type, row) {
        switch (row.attributes.status) {
          case "Available":
            return `<span class='item-score badge bg-success-soft'>${row.attributes.status}</span>`;
          case "Rented":
            return `<span class='item-score badge bg-primary-soft'>${row.attributes.status}</span>`;
          case "Inactive":
            return `<span class='item-score badge bg-warning-soft'>${row.attributes.status}</span>`;
          default:
            return `<span class='item-score badge bg-info-soft'>${row.attributes.status}</span>`;
        }
      },
    },
    {
      data: 'id',
      render: function (data, type, row) {
        return `
          <div class="d-flex align-items-center">
              <div class="px-2 d-flex align-items-center">
                  <button class="btn btn-white border-0 rounded-circle ms-0" data-item-id="${row.id}" title="Edit">
                      <span class="fe fe-eye"></span>
                  </button>
                  <button class="btn btn-white border-0 rounded-circle ms-0" data-item-id="${row.id}" title="Edit">
                      <span class="fe fe-edit-2"></span>
                  </button>
                  <button class="btn btn-white border-0 rounded-circle ms-0 singleCarDelete" data-item-id="${row.id}" title="Delete">
                      <span class="fe fe-trash-2"></span>
                  </button>
              </div>
              <div class="dropdown">
                  <a class="dropdown-ellipses dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                      <i class="fe fe-more-vertical"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a href="#" class="dropdown-item">Assurance</a>
                    <a href="#!" class="dropdown-item">Vidange</a>
                    <a href="#!" class="dropdown-item">Visite Technique</a>
                    <a href="#!" class="dropdown-item">Vignette</a>
                  </div>
              </div>
          </div>`;
      },
    },
  ];

  var myData = {};

  const initDatatable = new DataTable('#listCars', {
    processing: true,
    bPaginate: true,
    dom: '<"top"fl>rt<"bottom"ip>',
    pageLength: 10,
    bFilter: true,
    language: {
      searchPlaceholder: "Recherche",
      lengthMenu: ' _MENU_ ',
      paginate: {
        previous: '<a class="" href="#"><i class="fe fe-arrow-left ms-1"></i></a>',
        next: '<a class="" href="#"><i class="fe fe-arrow-right ms-1"></i></a>',
      }
    },
    bInfo: true,
    columns: columns,
    order: [[6, "asc"]],
    fnInfoCallback: function (oSettings, iStart, iEnd, iMax, iTotal) {
      return `${iStart}-${iEnd} to ${iTotal}`;
    },
    ajax: {
      url: APICars,
      type: "GET",
      headers: {
        'Authorization': `Bearer ${token}`, // Include the Bearer token
        'Content-Type': 'application/json'
      },
      data: function (d) {
        return $.extend(d, myData);
      },
    },
  });

  const buildCarCard = (cars) => {
    const UI = cars.map((item) => {
      const imageUrl = item.attributes.mainImage && item.attributes.mainImage.data && item.attributes.mainImage.data.attributes && item.attributes.mainImage.data.attributes.url
        ? `${localhost}${item.attributes.mainImage.data.attributes.url}`
        : fallbackImageUrl;

      return `
        <div class="col-12 col-md-6 col-xl-4">
          <div class="card">
            <div class="dropdown card-dropdown">
              <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-bs-toggle="dropdown">
                <i class="fe fe-more-vertical"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-end">
                <a href="#" class="dropdown-item">Assurance</a>
                <a href="#!" class="dropdown-item">Vidange</a>
                <a href="#!" class="dropdown-item">Visite Technique</a>
                <a href="#!" class="dropdown-item">Vignette</a>
                <hr />
                <a class="dropdown-item">Editer</a>
                <buttom class="dropdown-item text-danger carDelete" data-item-id="${item.id}">Supprimer</buttom>
              </div>
            </div>

            <span class="avatar avatar-sm p-1">
              <img src="assets/img/brands/${item.attributes.make}.png" alt="" class="avatar-img rounded" />
            </span>

            <img src="${imageUrl}" alt="car" class="card-img-top" />

            <div class="card-body text-center p-0">
              <h2 class="card-title">
                <a href="vehicule.html">${item.attributes.name}</a>
              </h2>

              <span class="mb-3 px-2 border-gray border border-black d-inline-block rounded-1">
                <span class="fw-bold">${item.attributes.licensePlate}</span>
              </span>

              <p class="card-text">
                <span class="badge bg-secondary-soft"> ${item.attributes.category} </span>
                <span class="badge bg-secondary-soft"> ${item.attributes.fuelType} </span>
              </p>
              <div class="row g-0 border-top border-botto">
                <div class="col-4 py-3 text-center">
                  <h6 class="text-uppercase text-muted">Transmission</h6>
                  <h3 class="mb-0">${item.attributes.transmission}</h3>
                </div>
                <div class="col-4 py-3 text-center border-start">
                  <h6 class="text-uppercase text-muted"> Nb. places </h6>
                  <h3 class="mb-0">${item.attributes.seats}</h3>
                </div>
                <div class="col-4 py-3 text-center border-start">
                  <h6 class="text-uppercase text-muted"> Annee </h6>
                  <h3 class="mb-0">${item.attributes.year}</h3>
                </div>
              </div>
            </div>

            <div class="card-footer card-footer">
              <div class="row align-items-center justify-content-between">
                <div class="col-auto">
                  <small>
                    <span class="text-success">●</span>
                    <span class="badge bg-success-soft">Available</span>
                  </small>
                </div>
                <div class="col-auto">
                  <a href="#" class="btn btn-sm btn-primary">Check Availablity</a>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    });

    for (var i = 0; i < UI.length; i++) {
      carsCard.innerHTML += UI[i];
    }
  }

  const carsCard = document.getElementById('carsCard');
  if (carsCard) {
    fetch(APICars, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // Add Bearer token to this request as well
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        let count = data.data.length;
        console.log(data.data);
        count > 0 ? buildCarCard(data.data) : carsCard.innerHTML = noCar;
      })
      .catch(err => console.error(err));
  }
});
