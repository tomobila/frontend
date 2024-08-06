const client = {
    id: 1,
    name: 'Azaf car'
}


// const APIScanCar = 'http://164.90.163.130:3000/api/v1/upload/customer-id'
// const APIScanCustomerId = "https://docai.api.tomobila.com/api/v1/upload/customer-id"
// const APIScanCar = "https://docai.api.tomobila.com/api/v1/upload/car-registration"

const localhost = "http://localhost:1338"
const APICars = `http://localhost:1338/api/vehicles/?populate=*&filters[agency][id][$eq]=1`;
const APICar = `http://localhost:1338/api/vehicles/`

const fallbackImageUrl = 'assets/img/default_lrg.jpg'



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
                    </div>`
            },
        },
        {
            data: 'attributes.make',
            render: function (data, row) {
                return `
                <div class="d-flex align-items-end justify-content-start">
                <div class="avatar avatar-sm" title="${data}" style="background-image: url(../assets/img/brands/${data}.png);  background-repeat: no-repeat;  background-size: contain;">
                    <!--  <img src="../assets/img/brands/${data}.png" alt="car" class="avatar-img rounded "> -->
                </div>
                </div>
                `
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
            className: "",
            render: function (data, type, row) {

                switch (row.attributes.status) {
                    case "Available":
                        return `
                            <span class='item-score badge bg-success-soft'>${row.attributes.status}</span>
                            `
                        break;
                    case "Rented":
                        return `
                            <span class='item-score badge bg-primary-soft'>${row.attributes.status}</span>
                            `
                        break;
                    case "Inactive":
                        return `
                            <span class='item-score badge bg-warning-soft'>${row.attributes.status}</span>
                            `
                        break;
                    default:
                        return `
                            <span class='item-score badge bg-info-soft'>${row.attributes.status}</span>
                            `
                        break;
                }

            },
        },
        {
            data: 'id',
            className: "",
            render: function (data, type, row) {

                return `
                <div class="d-flex align-items-center">
                    <div class="px-2 d-flex align-items-center">
                        <button class="btn btn-white border-0 rounded-circle ms-0" data-bs-toggle="tooltip"  data-item-id="${row.id}" data-bs-placement="bottom" title="Edit" data-bs-original-title="Edit">
                            <span class="fe fe-eye"></span>
                        </button>
                        <button class="btn btn-white border-0 rounded-circle ms-0" data-bs-toggle="tooltip"  data-item-id="${row.id}" data-bs-placement="bottom" title="Edit" data-bs-original-title="Edit">
                            <span class="fe fe-edit-2"></span>
                        </button>

                        <button  class="btn btn-white border-0 rounded-circle ms-0 singleCarDelete" data-item-id="${row.id}" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete" data-bs-original-title="Delete">
                            <span class="fe fe-trash-2"></span>
                        </button>
                    </div>


                    <div class="dropdown">
                        <a class="dropdown-ellipses dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fe fe-more-vertical"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" style="">
                        <a href="#" class="dropdown-item">
                            Assurance
                        </a>
                        <a href="#!" class="dropdown-item">
                            Vidange
                        </a>
                        <a href="#!" class="dropdown-item">
                            Visite Technique
                        </a>
                        <a href="#!" class="dropdown-item">
                            Vignette
                        </a>
                        </div>
                    </div>
                    </div>
                    `
            },
        },

    ]


    var myData = {};

    const initDatatable = new DataTable('#listCars', {
        processing: true,
        bPaginate: false,
        columns: columns,
        bFilter: true,
        language: {
            searchPlaceholder: "Recherche"
        },
        bInfo: true,
        order: [[6, "asc"]],
        fnInfoCallback: function (oSettings, iStart, iEnd, iMax, iTotal, sPre) {
            return `${iStart}-${iEnd} to ${iTotal}`;
        },
        ajax: {
            url: APICars,
            type: "GET",
            data: function (d) {
                return $.extend(d, myData);
            },
        },
    })


    const noCar = `
      <div class="row my-6">
          <div class="col">
              
                  <div class=" text-center">

                      <div class="card-avatar avatar avatar-xxl mx-auto"  style="width: 200px;height: auto">
                          <img src="../assets/img/icons/noCar.png" alt="" class="avatar-img rounded">
                      </div>

                      <h2 class="mb-2">
                      Pas encore de voiture
                      </h2>

                      <p class="card-text text-muted small">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>

                        <a href="./n-vehicule.html" class="btn btn- btn-primary px-3 mx-auto">Ajouter Véhicule</a>

                  </div>
                  
                  
          </div>
        </div>`

    var carIdToDelete = 0;

    initDatatable.on('draw', function () {

        const singleCarDelete = document.querySelectorAll(".singleCarDelete");
        singleCarDelete.forEach(item => {

            item.addEventListener('click', event => {

                event.stopPropagation();
                carIdToDelete = item.getAttribute('data-item-id');
                console.log('====================================');
                console.log(carIdToDelete);
                console.log('====================================');
                $('#confirmationModal').modal('show');

            });
        });
    })


    // DELETE CAR

    document.getElementById('confirmDelete').addEventListener('click', function () {
        if (carIdToDelete != 0) {

            fetch(`${APICar}${carIdToDelete}`, {
                method: 'DELETE'
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    initDatatable.ajax.reload();

                    $('#confirmationModal').modal('hide');
                    // alert('Item deleted successfully');
                    carIdToDelete = 0;
                })
                .catch(error => {
                    initDatatable.ajax.reload();
                    // Handle error
                    $('#confirmationModal').modal('hide');
                    // alert('Error deleting item: ' + error.message);
                    carIdToDelete = null;
                });
        }
    });


    const older = document.getElementById("older");
    const newer = document.getElementById("newer");


    if (older) {

        older.addEventListener("click", () => {

            console.log(initDatatable.page.info());
            initDatatable.page('previous').draw('page')
        })
    }
    if (newer) {

        newer.addEventListener("click", () => {
            console.log("prev");
            initDatatable.page('next').draw('page')
        })
    }

    const VStatus = (statu) => {
        switch (statu) {
            case "Available":
                return `
                    <span class="badge bg-success-soft position-absolute" style="top: 10px; right: 10px;">
                        ${statu}
                    </span>
                `
                break;
            case "Loue":
                return `
                    <span class="badge bg-primary-soft position-absolute" style="top: 10px; right: 10px;">
                        ${statu}
                    </span>
                `
                break;
            case "maintenance":
                return `
                    <span class="badge bg-danger-soft position-absolute" style="top: 10px; right: 10px;">
                        ${statu}
                    </span>
                `
                break;

            default:
                return `
                    <span class="badge bg-primary-soft position-absolute" style="top: 10px; right: 10px;">
                        ${statu}
                    </span>
                `
                break;
        }
    }

    // function splitStringIntoSpans(str) {
    //     // Split the string into an array of elements using the hyphen as the delimiter
    //     const elements = str.split('-');

    //     // Create an array to hold the HTML for each span
    //     const spans = elements.map(element => {
    //         // Create the HTML for the span element
    //         return `<span>${element}</span>`;
    //     });

    //     // Join the array of spans into a single string
    //     return spans.join('');
    // }

    const carsCard = document.getElementById('carsCard');
    if (carsCard) {
        fetch(APICars)
            .then(response => response.json())
            .then(data => {
                let count = data.data.length
                console.log(data.data)
                count > 0 ? buildCarCard(data.data) : carsCard.innerHTML = noCar;
            })
            .catch(err => console.error(err));

        const buildCarCard = (cars) => {


            const UI = cars.map((item) => {
                const imageUrl = item.attributes.MainImage && item.attributes.MainImage.data && item.attributes.MainImage.data.attributes && item.attributes.MainImage.data.attributes.url
                    ? `${localhost}${item.attributes.MainImage.data.attributes.url}`
                    : fallbackImageUrl;

                // const spansHtml = splitStringIntoSpans(item.attributes.LicensePlate);
                // console.log(spansHtml)
                return `
                <div class="col-12 col-md-6 col-xl-4">
                <div class="card">
                  <!-- Dropdown -->
                  <div class="dropdown card-dropdown">
                    <a
                      href=""
                      class="dropdown-ellipses dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fe fe-more-vertical"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a
                        href="#"
                        class="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#updateAssurance"
                      >
                        Assurance
                      </a>
                      <a
                        href="#!"
                        class="dropdown-item"
                        data-bs-target="#updateVidange"
                        data-bs-toggle="modal"
                      >
                        Vidange
                      </a>
                      <a
                        href="#!"
                        class="dropdown-item"
                        data-bs-target="#updateVisite"
                        data-bs-toggle="modal"
                      >
                        Visite Technique
                      </a>
                      <a
                        href="#!"
                        class="dropdown-item"
                        data-bs-target="#updateVignette"
                        data-bs-toggle="modal"
                      >
                        Vignette
                      </a>
                      <hr />
                      <a
                        class="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#modalEditCar"
                      >
                        Editer
                      </a>
                      <a
                        class="dropdown-item text-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#confirmationModal"
                      >
                        Supprimer
                      </a>
                    </div>
                  </div>

                  <span
                    class="avatar avatar-sm p-1"
                    style="left: 15px; top: 15px"
                  >
                    <img
                      src="assets/img/brands/${item.attributes.make}.png"
                      alt=""
                      class="avatar-img rounded"
                    />
                  </span>

                  <img
                    src="${localhost}${item.attributes.mainImage.data.attributes.url}"
                    alt="car"
                    style="width: 240px; margin: auto"
                    class="card-img-top"
                  />

                  <div class="card-body text-center p-0">
                    <h2 class="card-title">
                      <a href="vehicule.html">${item.attributes.name}</a>
                    </h2>

                    <span
                      class="mb-3 px-2 border-gray border border-black d-inline-block rounded-1"
                    >
                      <span class="fw-bold">
                        <!--<span class="border-end border-gray px-2">212142</span>
                        <span class="border-end border-gray px-2">A</span>
                        <span>13</span>-->
                        ${item.attributes.licensePlate}
                      </span>
                    </span>

                    <p class="card-text">
                      <span class="badge bg-secondary-soft"> ${item.attributes.category} </span>
                      <span class="badge bg-secondary-soft"> ${item.attributes.fuelType} </span>
                    </p>
                    <div class="row g-0 border-top border-botto">
                      <div class="col-4 py-3 text-center">
                        <h6 class="text-uppercase text-muted">
                          Transmission
                        </h6>

                        <h3 class="mb-0">  ${item.attributes.transmission} </h3>
                      </div>
                      <div class="col-4 py-3 text-center border-start">
                        <h6 class="text-uppercase text-muted"> Nb. places </h6>

                        <h3 class="mb-0">${item.attributes.seats}  </h3>
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
                          <span class="badge bg-success-soft"> Available </span>
                        </small>
                      </div>
                      <div class="col-auto">
                        <a href="" class="btn btn-sm btn-primary">
                          Check Availablity
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                `;

            })

            for (var i = 0; i < UI.length; i++) {
                carsCard.innerHTML += UI[i];
            }
        }
    }

})