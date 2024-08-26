const client = {
  id: 1,
  name: 'Azaf car'
}


const APIPaiments = `https://panel.tomobila.com/api/payments/?populate[booking][populate]=*`;
const localhost = "https://panel.tomobila.com"
const totalAmountHTML = document.getElementById("totalAmount")

const paginatedLenght = 10
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
      const totalAmount = data.data.reduce((total, item) => {
        return total + item.attributes.amount;
      }, 0);

      console.log(`Total amount: ${totalAmount}`);
      // document.getElementById("totalAmount").textContent = totalAmount
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
      data: 'attributes.paymentDate',
      render: function (row, type, data) {
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        return `
                <div class="d-flex flex-row justify-content-start">
                    <time>${moment(row).format('DD MMM YYYY')} 
                    </div>
                    `
        // - ${moment(row).format('HH:mm')}</time> 
      }

    },
    {
      data: 'attributes.booking',

      render: function (data) {

        return `
                    <span>${data.data.attributes.mainDriver.data.attributes.firstName} ${data.data.attributes.mainDriver.data.attributes.lastName}</span>
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
      data: 'attributes.record_files',
      render: function (row, type, data) {

        return `
                <span class="fe fe-paperclip"></span>
                `
      }



    },
    {
      data: 'id',
      className: "",
      render: function (data, type, row) {
        return `
            <div class="px-2 d-flex  align-items-end justify-content-end">
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
    bPaginate: true,
    dom: '<"top"fl>rt<"bottom"ip>',
    pageLength: 10,
    bFilter: true,
    language: {
      searchPlaceholder: "Recherche",
      lengthMenu: ' _MENU_ ',
      processing: loaderEmails,
      paginate: {
        previous: '<a class="" href="#"><i class= "fe fe-arrow-left ms-1" ></i></a> ', // Custom Previous button with an icon
        next: '<a class="" href="#"><i class= "fe fe-arrow-right ms-1" ></i></a> ', // Custom Previous button with an icon
      }
    },
    bInfo: true,
    order: [[1, "asc"]],
    columns: columns,
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
