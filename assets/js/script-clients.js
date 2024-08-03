const client = {
    id: 1,
    name: 'Azaf car'
}


const APIScanCustomerId = "https://docai.api.tomobila.com/api/v1/upload/customer-id"

const localhost = "http://localhost:1338"
const APIClients = `http://localhost:1338/api/agencies/1?populate[agency_customers][populate]=*`;
const newApiCustomers = `http://localhost:1338/api/customers/?populate[agency_customer][populate]=agency&filters[agency_customer][agency][id][$eq]=1`
// console.log();
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat)

document.addEventListener("DOMContentLoaded", function () {

    var notyf = new Notyf();
    notyf.success({
        message: "test",
        duration: 1500,
        position: {
            x: "center",
            y: "bottom",
        },
    })
    const columns = [
        {
            data: 'publishedAt',
            render: function (data, type, row) {
                return `${dayjs(data, "MM-DD-YYYY")}`
            }
        }
        ,
        {
            data: 'id',
            className: "d-flex align-items-center mb-2",
            render: function (data, type, row) {

                return `
                    <div class="avatar avatar-sm me-3">
                        <span class="avatar-title rounded-circle">
                        ${row.lastName.charAt(0).toUpperCase()}${row.firstName.charAt(0).toUpperCase()}
                        </span>
                    </div>
                    <b class='m-0'>${row.lastName} ${row.firstName}</b>`
            },
        },
        {
            data: 'phone',
        },
        {
            data: 'cniNumber',
        },
        {
            data: 'driverLicenseNumber',
        },
        {
            data: 'email',
        },
        // {
        //     data: 'id',
        //     className: "",
        //     render: function (data, type, row) {

        //         switch (row.attributes.Status) {
        //             case "En contrat":
        //                 return `
        //                     <span class='item-score badge bg-success-soft'>${row.attributes.Status}</span>
        //                     `
        //                 break;
        //             case "Active":
        //                 return `
        //                     <span class='item-score badge bg-primary-soft'>${row.attributes.Status}</span>
        //                     `
        //                 break;
        //             case "Desactive":
        //                 return `
        //                     <span class='item-score badge bg-warning-soft'>${row.attributes.Status}</span>
        //                     `
        //                 break;
        //             default:
        //                 return `
        //                     <span class='item-score badge bg-info-soft'>${row.attributes.Status}</span>
        //                     `
        //                 break;
        //         }

        //     },
        // },
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
                    `
            },
        },

    ]

    var myData = {};
    let initDatatable

    fetch(APIClients)
        .then(response => response.json())
        .then(jsonData => {
            const flattenedData = jsonData.data.attributes.agency_customers.data.map(customerData => {
                return customerData.attributes.customers.data.map(customer => ({
                    id: customer.id,
                    firstName: customer.attributes.firstName,
                    lastName: customer.attributes.lastName,
                    email: customer.attributes.email,
                    phone: customer.attributes.phone,
                    dateOfBirth: customer.attributes.DateOfBirth,
                    driverLicenseNumber: customer.attributes.driverLicenseNumber,
                    address: customer.attributes.address,
                    driverLicenseExpiration: customer.attributes.driverLicenseExpiration,
                    cniNumber: customer.attributes.cniNumber,
                    cniExpiration: customer.attributes.cniExpiration,
                    isBlacklisted: customer.attributes.isBlacklisted,
                    blacklistReason: customer.attributes.blacklistReason,
                    createdAt: customer.attributes.createdAt,
                    updatedAt: customer.attributes.updatedAt,
                    publishedAt: customer.attributes.publishedAt
                }));
            }).flat();
            console.log(flattenedData);

            initDatatable = new DataTable('#listClients', {
                processing: true,
                bPaginate: false,
                data: flattenedData,
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
        })


    // const initDatatable = new DataTable('#listClients', {
    //     processing: true,
    //     bPaginate: false,
    //     // data: flattenedData,
    //     columns: columns,
    //     bFilter: true,
    //     language: {
    //         searchPlaceholder: "Recherche"
    //     },
    //     bInfo: true,
    //     order: [[5, "asc"]],
    //     fnInfoCallback: function (oSettings, iStart, iEnd, iMax, iTotal, sPre) {
    //         return `${iStart}-${iEnd} to ${iTotal}`;
    //     },
    //     ajax: {
    //         url: APIClients,
    //         type: "GET",
    //         data: function (d) {
    //             return $.extend(d, myData);
    //         },
    //     },
    // })


    //     const older = document.getElementById("older");
    // const newer = document.getElementById("newer");

    // if (older) {

    //     older.addEventListener("click", () => {
    //         // console.log(initDatatable.page.info());
    //         initDatatable.page('previous').draw('page')
    //     })
    // }
    // if (newer) {

    //     newer.addEventListener("click", () => {
    //         initDatatable.page('next').draw('page')
    //     })
    // }



})