const client = {
    id: 1,
    name: 'Azaf car'
}


const APIPaiments = `https://panel.tomobila.com/api/payments/?populate=*`;
const localhost = "https://panel.tomobila.com"


document.addEventListener("DOMContentLoaded", function () {

    fetch(APIPaiments)

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
            data: 'attributes.booking',
            className: "p-3",
            render: function (data) {

                return `
                    <a class="text-muted" href="n-contrat.html?id=${data.data.id}">#${data.data.id}</a>
                `
            }

        },
        {
            data: 'attributes.createdAt',
            render: function (row, type, data) {

                return `
                <div class="d-flex flex-row justify-content-start">
                    <time>${moment(data).format('DD MMM YYYY')} - ${moment(data).format('HH:mm:ss')}</time> <time></time>
                </div>
                `
            }

        },
        {
            data: 'attributes.amount',
            render: function (row, type, data) {

                return `
                <div class="">
                    ${row}
                </div>
                `
            }

        },
        {
            data: 'attributes.status',
            render: function (data) {

                const VStatus = (statu) => {
                    switch (statu) {
                        case "In progress":
                            return `
                        <span class="badge bg-warning">
                            ${statu}
                        </span>`
                            break;
                        case "Pending":
                            return `
                        <span class="badge bg-danger">
                            ${statu}
                        </span>`
                            break;
                        case "Completed":
                            return `
                                    <span class="badge bg-success">
                                        ${statu}
                                    </span>`
                            break;
                        default:
                            return `
                                <span class="badge bg-primary">
                                    ${statu}
                                </span>`
                            break;
                    }
                }
                return `${VStatus(data)}`
            }

        },
        {
            data: 'attributes.paymentMethod',

        },
        {
            data: 'id',
            className: "",
            render: function (data, type, row) {
                return `
            <div class="px-2">
                <button class="btn btn-white border-0 rounded-circle ms-0 singleCustomerEdit" data-item-id="${row.id}" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Archive" data-bs-original-title="Archive">
                    <span class="fe fe-edit-2"></span>
                </button>

                <button  class="btn btn-white text-danger border-0 rounded-circle ms-0 singleCustomerDelete" data-item-id="${row.id}"  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete" data-bs-original-title="Delete">
                    <span class="fe fe-trash-2"></span>
                </button>
            </div>
            `
            },
        },

    ]

    var myData = {};

    const initDatatable = new DataTable('#listPaiments', {
        processing: true,
        bPaginate: false,
        columns: columns,
        bFilter: true,
        language: {
            searchPlaceholder: "Recherche"
        },
        bInfo: true,
        order: [[1, "asc"]],
        fnInfoCallback: function (oSettings, iStart, iEnd, iMax, iTotal, sPre) {
            return `${iStart}-${iEnd} to ${iTotal}`;
        },
        ajax: {
            url: APIPaiments,
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