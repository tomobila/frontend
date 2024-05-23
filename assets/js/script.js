const client = {
    id: 1,
    name: 'Azaf car'
}

document.addEventListener("DOMContentLoaded", function () {

    const APICars = `http://localhost:1337/api/cars/?populate=*&filters[Agency][id][$eq]=${client.id}`;
    const localhost = "http://localhost:1337"
    // console.log("dsd")

    fetch(APICars)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));

    const columns = [
        {
            data: 'id',
            className: "d-flex align-items-center mb-2",
            render: function (data, type, row) {

                return `
                    <div class="avatar avatar-sm align-middle me-3">
                        <img src="${localhost}${row.attributes.MainImage.data.attributes.url}" class="avatar-img rounded">
                    </div>
                    <p class='m-0'>${row.attributes.Name}</p>
                    `
            },
        },
        {
            data: 'attributes.Make',
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

    older.addEventListener("click", () => {

        console.log(initDatatable.page.info());
        initDatatable.page('previous').draw('page')
    })

    newer.addEventListener("click", () => {
        console.log("prev");
        initDatatable.page('next').draw('page')
    })

    document.getElementById('addCar').addEventListener('submit', function (event) {
        event.preventDefault();

        var formData = new FormData(this);
        const elements = this.elements; // 'this' refers to the form
        const jsonData = {};


        for (let element of elements) {
            if (element.name && element.type !== 'submit') { // Ensure the element has a name and is not the submit button
                if (element.type === 'file') {
                    if (element.files.length > 0) { // Check if files are selected
                        formData.append(element.name, element.files[0]); // Append each file to formData
                    }
                } else {
                    // formData.append(element.name, element.value); // Append other input types to formData
                    jsonData[element.name] = element.value;
                }
            }
        }

        formData.append('data', JSON.stringify(jsonData));


        fetch('http://localhost:1337/api/cars', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch((error) => console.error('Error:', error));
    })

})