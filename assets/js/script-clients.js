const client = {
    id: 1,
    name: 'Azaf car'
}


// const APIScanCar = 'http://164.90.163.130:3000/api/v1/upload/customer-id'
const APIScanCustomerId = "https://docai.api.tomobila.com/api/v1/upload/customer-id"

const localhost = "http://localhost:1338"
const APIClients = `http://localhost:1338/api/agencies/1?populate[agency_customers][populate]=*`;


document.addEventListener("DOMContentLoaded", function () {
    fetch(APIClients)

        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data.data.attributes.agency_customers.data[0].attributes.customers.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });




    const columns = [
        {
            data: 'id',
            className: "d-flex align-items-center mb-2",
            render: function (data, type, row) {

                return `
                    <div class="avatar avatar-sm me-3">
                        <span class="avatar-title rounded-circle">
                        ${row.attributes.lastName.charAt(0).toUpperCase()}${row.attributes.firstName.charAt(0).toUpperCase()}
                        </span>
                    </div>
                    <b class='m-0'>${row.attributes.lastName} ${row.attributes.firstName}</b>
                    `
            },
        },
        {
            data: 'attributes.phone',
        },
        {
            data: 'attributes.cniNumber',
        },
        {
            data: 'attributes.driverLicenseNumber',
        },
        {
            data: 'attributes.email',
        },
        {
            data: 'id',
            className: "",
            render: function (data, type, row) {

                switch (row.attributes.Status) {
                    case "En contrat":
                        return `
                            <span class='item-score badge bg-success-soft'>${row.attributes.Status}</span>
                            `
                        break;
                    case "Active":
                        return `
                            <span class='item-score badge bg-primary-soft'>${row.attributes.Status}</span>
                            `
                        break;
                    case "Desactive":
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
            className: "d-flex align-items-center",
            render: function (data, type, row) {

                return `
                    <div class="px-2">
                        <button class="btn btn-white border-0 rounded-circle ms-0 singleEmailArchive" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Archive" data-bs-original-title="Archive">
                            <span class="fe fe-edit-2"></span>
                        </button>

                        <button  class="btn btn-white border-0 rounded-circle ms-0 singleEmailDelete" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete" data-bs-original-title="Delete">
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
                    `
            },
        },

    ]

    var myData = {};

    const initDatatable = new DataTable('#listClients', {
        processing: true,
        bPaginate: false,
        columns: columns,
        bFilter: true,
        language: {
            searchPlaceholder: "Recherche"
        },
        bInfo: true,
        order: [[5, "asc"]],
        fnInfoCallback: function (oSettings, iStart, iEnd, iMax, iTotal, sPre) {
            return `${iStart}-${iEnd} to ${iTotal}`;
        },
        ajax: {
            url: APIClients,
            type: "GET",
            data: function (d) {
                return $.extend(d, myData);
            },
        },
    })


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




    const carsCard = document.getElementById('carsCard');
    if (carsCard) {
        fetch(APICars)
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                buildCarCard(data.data)
            })
            .catch(err => console.error(err));
        const buildCarCard = (cars) => {
            const UI = cars.map((item) => {

                return `
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="card">
    
                    <div class=" position-relative">
                        <span class="badge bg-success-soft position-absolute" style="top: 10px; right: 10px;">
                            ${item.attributes.Status}
                        </span>
                        <img src="${localhost}${item.attributes.MainImage.data.attributes.url}" alt="..." class="card-img-top px-6 pt-4">
                    </div>
    
                    <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col">
                                
                                <div class="avatar avatar-sm">
                                    <img src="../assets/img/brands/${item.attributes.Make}.png" alt="car" class="avatar-img rounded ">
                                </div>
                                <h2 class="card-title text-center">
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
                            <div class="col-4 py-4 text-center">
    
                                <h6 class="text-uppercase text-muted">
                                Followers
                                </h6>
    
                                <h2 class="mb-0">10.2k</h2>
    
                            </div>
                            <div class="col-4 py-4 text-center border-start">
    
                                <h6 class="text-uppercase text-muted">
                                Following
                                </h6>
    
                                <h2 class="mb-0">2.7k</h2>
    
                            </div>
                            <div class="col-4 py-4 text-center border-start">
    
                                <h6 class="text-uppercase text-muted">
                                Following
                                </h6>
    
                                <h2 class="mb-0">2.7k</h2>
    
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

    // const formCar = document.getElementById("formscanCar")
    const send = document.querySelector("#formscanCar");

    send.addEventListener("click", async (event) => {
        event.preventDefault();

        const formData = new FormData();

        const fileInput = document.getElementById("filesCar").files;

        for (let i = 0; i < fileInput.length; i++) {
            formData.append("upload", fileInput[i]);
        }

        if (fileInput.length < 2) {
            alert("Please select files to upload.");
            return;
        }

        const response = await fetch(APIScanCar, {
            method: "POST",
            body: formData,
        });
        const car_brands = document.getElementById("car_brands");
        const car_model = document.getElementById("car_model");
        const car_nb_places = document.getElementById("car_nb_places");
        const car_fuel = document.getElementById("car_fuel");
        const car_immatriculation_w = document.getElementById("car_immatriculation_w");
        const car_immatriculation = document.getElementById("car_immatriculation");
        const car_first_use = document.getElementById("car_first_use")


        response.json().then(data => {
            console.log(data.data);
            let DATA = data.data
            // console.log(data.data.brand)
            car_brands.value = String(DATA.brand.charAt(0).toUpperCase() + DATA.brand.slice(1).toLowerCase());
            car_model.value = String(DATA.model)
            car_nb_places.value = DATA.numberOfSeats
            car_fuel.value = DATA.fuelType
            car_immatriculation.value = DATA.registrationNumber
            car_immatriculation_w.value = DATA.registrationNumber
            car_first_use.value = DATA.firstRegistrationDate
            console.log(new Date(DATA.firstRegistrationDate))

            // DATA.registrationNumber
            // DATA.firstRegistrationDate
            // DATA.numberOfSeats
            // DATA.fuelType
            // DATA.firstRegistrationDate
            // DATA.chassisNumber


        }).catch(error => {
            console.error('Error:', error);
        });


        // console.log(response.json());

        // try {
        //     fetch(APIScanCar, {
        //         method: "POST",
        //         body: formData,
        //         mode: 'no-cors',
        //         headers: {
        //             "Content-Type": "multipart/form-data"
        //         }

        //     })
        //         .then(response => {
        //             console.log('====================================');
        //             console.log(response);
        //             console.log('====================================');
        //         })
        //         .then(data => {
        //             console.log(data)
        //         })

        //     // const response = fetch(APIScanCar, {
        //     //     method: "POST",
        //     //     body: formData,
        //     //     headers: {
        //     //         'Content-Type': 'application/json'
        //     //     },
        //     //     mode: 'no-cors'
        //     // });
        //     // const result = response.json();
        //     // console.log("Files uploaded successfully:", result);

        //     // if (response.ok) {
        //     // } else {
        //     //     console.error("Failed to upload files:", response.statusText);
        //     // }
        // } catch (error) {
        //     console.error("Error:", error);
        // }
    });

    // document.getElementById('addCar').addEventListener('submit', function (event) {
    //     event.preventDefault();

    //     var formData = new FormData(this);
    //     const elements = this.elements; // 'this' refers to the form
    //     const jsonData = {};


    //     for (let element of elements) {
    //         if (element.name && element.type !== 'submit') { // Ensure the element has a name and is not the submit button
    //             if (element.type === 'file') {
    //                 if (element.files.length > 0) { // Check if files are selected
    //                     formData.append(element.name, element.files[0]); // Append each file to formData
    //                 }
    //             } else {
    //                 jsonData[element.name] = element.value;
    //             }
    //         }
    //     }

    //     formData.append('data', JSON.stringify(jsonData));



    // })





})