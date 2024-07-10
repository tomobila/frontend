const client = {
    id: 1,
    name: 'Azaf car'
}


// const APIScanCar = 'http://164.90.163.130:3000/api/v1/upload/customer-id'
const APIScanCustomerId = "https://docai.api.tomobila.com/api/v1/upload/customer-id"

const APIContrats = `http://localhost:1337/api/rentals/?populate=*`;
const localhost = "http://localhost:1337"


document.addEventListener("DOMContentLoaded", function () {
    fetch(APIContrats)

        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });




    const columns = [
        {
            data: 'id',
        },
        {
            data: 'id',
            className: "d-flex align-items-center mb-2",
            render: function (data, type, row) {

                return `
                    <div class="avatar avatar-sm me-3">
                        <span class="avatar-title rounded-circle">
                        ${row.attributes.LastName.charAt(0).toUpperCase()}${row.attributes.FirstName.charAt(0).toUpperCase()}
                        </span>
                    </div>
                    <b class='m-0'>${row.attributes.LastName} ${row.attributes.FirstName}</b>
                    `
            },
        },
        {
            data: 'attributes.Phone',
        },
        {
            data: 'attributes.CNI',
        },
        {
            data: 'attributes.DriverLicenseNumber',
        },
        {
            data: 'attributes.Email',
        },
        {
            data: 'id',
            className: "",
            render: function (data, type, row) {

                switch (row.attributes.Status) {
                    case "En cours":
                        return `
                            <span class='item-score badge bg-success-soft'>${row.attributes.status}</span>
                            `
                        break;
                    case "Termine":
                        return `
                            <span class='item-score badge bg-primary-soft'>${row.attributes.status}</span>
                            `
                        break;
                    case "Annule":
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
            url: APIContrats,
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






})