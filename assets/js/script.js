const client = {
    id: 1,
    name: 'Azaf car'
}


// const APIScanCar = 'http://164.90.163.130:3000/api/v1/upload/customer-id'
const APIScanCar = "https://docai.api.tomobila.com/api/v1/upload/customer-id"

document.addEventListener("DOMContentLoaded", function () {

    const APICars = `http://localhost:1337/api/cars/?populate=*&filters[Agency][id][$eq]=${client.id}`;
    const localhost = "http://localhost:1337"
    // console.log("dsd")



    const columns = [
        {
            data: 'id',
            className: "d-flex align-items-center mb-2",
            render: function (data, type, row) {

                return `
                    <div class="avatar avatar-lg align-middle me-3">
                        <img src="${localhost}${row.attributes.MainImage.data.attributes.url}" class="avatar-img rounded p-1">
                    </div>
                    <p class='m-0'>${row.attributes.Name}</p>
                    `
            },
        },
        {
            data: 'attributes.Make',
            render: function (data, row) {
                return `
                <div class="avatar avatar-sm">
                    <img src="../assets/img/brands2/${data}.svg" alt="car" class="avatar-img rounded ">
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
                                    <img src="../assets/img/brands2/${item.attributes.Make}.svg" alt="car" class="avatar-img rounded ">
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

    const formCar = document.getElementById("formscanCar")
    formCar.addEventListener("click", (event) => {
        event.preventDefault();


        const fileInput = document.getElementById("filesCar");
        const files = fileInput.files;
        console.log('====================================');
        console.log(files);
        console.log('====================================');
        if (files.length === 0) {
            alert("Please select files to upload.");
            return;
        }
        var formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append("upload", files[i]);
        }

        try {
            fetch(APIScanCar, {
                method: "POST",
                body: formData,
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    console.log('====================================');
                    console.log(response);
                    console.log('====================================');
                })
                .then(data => {
                    console.log(data)
                })

            // const response = fetch(APIScanCar, {
            //     method: "POST",
            //     body: formData,
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     mode: 'no-cors'
            // });
            // const result = response.json();
            // console.log("Files uploaded successfully:", result);

            // if (response.ok) {
            // } else {
            //     console.error("Failed to upload files:", response.statusText);
            // }
        } catch (error) {
            console.error("Error:", error);
        }
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