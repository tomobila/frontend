const client = {
    id: 4,
    name: 'Azaf car'
}


// const APIScanCar = 'http://164.90.163.130:3000/api/v1/upload/customer-id'
// const APIScanCustomerId = "https://docai.api.tomobila.com/api/v1/upload/customer-id"
// const APIScanCar = "https://docai.api.tomobila.com/api/v1/upload/car-registration"

const APICars = `http://localhost:1337/api/cars/?populate=*&filters[Agency][id][$eq]=${client.id}`;
const localhost = "http://localhost:1337"
const APICar = `http://localhost:1337/api/cars/`

const fallbackImageUrl = 'assets/img/default_lrg.jpg'



document.addEventListener("DOMContentLoaded", function () {


    const columns = [
        {
            data: 'id',
            className: "",
            render: function (data, type, row) {

                const imageUrl = row.attributes.MainImage && row.attributes.MainImage.data && row.attributes.MainImage.data.attributes && row.attributes.MainImage.data.attributes.url
                    ? `${localhost}${row.attributes.MainImage.data.attributes.url}`
                    : fallbackImageUrl;

                return `
                <div class="d-flex align-items-center mb-2">
                    <div class="avatar avatar-4by3 align-middle me-3" >
                        <img src="${imageUrl}" class="avatar-img rounded p-1">
                    </div>
                    <p class='m-0'>${row.attributes.Name}</p>
                    </div>`
            },
        },
        {
            data: 'attributes.Make',
            render: function (data, row) {
                return `
                <div class="avatar avatar-sm" title="${data}" style="background-image: url(../assets/img/brands/${data}.png);  background-repeat: no-repeat;  background-size: contain;">
                    <!--  <img src="../assets/img/brands/${data}.png" alt="car" class="avatar-img rounded "> -->
                </div>
                `
            }
        },
        {
            data: 'attributes.Model',
        },
        {
            data: 'attributes.Categorie',
        },
        {
            data: 'attributes.LicensePlate',
        },
        {
            data: 'attributes.FuelType',
        },
        {
            data: 'id',
            className: "",
            render: function (data, type, row) {

                switch (row.attributes.Status) {
                    case "Available":
                        return `
                            <span class='item-score badge bg-success-soft'>${row.attributes.Status}</span>
                            `
                        break;
                    case "Loue":
                        return `
                            <span class='item-score badge bg-primary-soft'>${row.attributes.Status}</span>
                            `
                        break;
                    case "maintenance":
                        return `
                            <span class='item-score badge bg-warning-soft'>${row.attributes.Status}</span>
                            `
                        break;
                    default:
                        return `
                            <span class='item-score badge bg-info-soft'>${row.attributes.Status}</span>
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
                            <span class="fe fe-edit-2"></span>
                        </button>

                        <button  class="btn btn-white border-0 rounded-circle ms-0 singleCarDelete" data-item-id="${row.id}" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete" data-bs-original-title="Delete">
                            <span class="fe fe-trash-2"></span>
                        </button>
                    </div>


                    <div class="dropdown">
                        <a class="dropdown-ellipses dropdown-toggle" href="crm-contacts.html#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fe fe-more-vertical"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" style="">
                        <a href="crm-contacts.html#!" class="dropdown-item">
                            Action
                        </a>
                        <a href="crm-contacts.html#!" class="dropdown-item">
                            Another action
                        </a>
                        <a href="crm-contacts.html#!" class="dropdown-item">
                            Something else here
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
                return `
                <div class="col-12 col-md-6 col-xl-4">
                    <a href="vehicule.html?id=${item.id}" class="card vCard">
    
                    <div class="position-relative">
                        
                            ${VStatus(item.attributes.Status)}
                        
                        <div class="avatar avatar-xs  position-absolute" style="top: 15px;    width: 100vw; left: 15px;background-image: url(../assets/img/brands/${item.attributes.Make}.png); background-repeat: no-repeat;  background-size: contain;">
                                    <!-- <img src="../assets/img/brands2/${item.attributes.Make}.svg" alt="car" class="avatar-img rounded "> -->
                                </div>
                        <img src="${imageUrl}" alt="..." class="card-img-top px-6 pt-4">
                    </div>
    
                    <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col">
                                

                                <h2 class="card-title text-center mb-0">
                                    ${item.attributes.Name}
                                </h2>
    
                                <p class="small text-center text-muted mb-3">
                                    ${item.attributes.Make}
                                </p>
    
                                <p class="text-center mb-4">
                                <span class="badge bg-secondary-soft">
                                    ${item.attributes.Categorie}
                                </span>
                                <span class="badge bg-secondary-soft">
                                    ${item.attributes.FuelType}
                                </span>
                                </p>
                            </div>
    
                            </div>
    
                            <div class="row g-0 border-top border-bottom">
                               
                             <div class="col-4 py-3 text-center ">
    
                                <h6 class="text-uppercase text-muted">
                                Transmission
                                </h6>
    
                                <h3 class="mb-0">
                                    ${item.attributes.Transmission}
                                </h3>
    
                            </div>
                            <div class="col-4 py-3 text-center border-start">
    
                                <h6 class="text-uppercase text-muted">
                                    Nb. places
                                </h6>
    
                                <h3 class="mb-0">
                                ${item.attributes.Seats}
                                </h3>
    
                            </div>
                            <div class="col-4 py-3 text-center border-start">
    
                                <h6 class="text-uppercase text-muted">
                                Annee
                                </h6>
    
                                <h3 class="mb-0">${item.attributes.Year}</h3>
    
                            </div>
                            </div>
                        </div>
    
    
                    </a>
                </div>
                `;

            })

            for (var i = 0; i < UI.length; i++) {
                carsCard.innerHTML += UI[i];
            }
        }
    }

})