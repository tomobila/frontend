const client = {
  id: 1,
  name: 'Azaf car'
}


const APIContrats = `https://panel.tomobila.com/api/bookings/?populate[vehicle][populate]=*&populate[mainDriver][populate]=*&populate[payments][populate]=*`;
const localhost = "https://panel.tomobila.com"


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
      data: 'attributes.createdAt',
      render: function (row, type, data) {

        return `
                <div class="d-flex flex-column align-items-center justify-content-center">
                    <time>${moment(row).format('DD MMM YYYY')}</time> <time>${moment(row).format('HH:mm:ss')}</time>
                </div>
                `
      }
    },
    {
      data: 'attributes.vehicle',
      className: '',
      render: function (data) {

        let licence = data.data.attributes.licensePlate
        let parts = licence.split("-");

        return `
                    <div class="d-flex align-items-center mb-2">
                      <div class="avatar avatar-4by3 align-middle me-3">
                        <img src="${localhost}${data.data.attributes.mainImage.data.attributes.url} " class="avatar-img rounded p-1">
                      </div>
                      <div class="d-flex flex-column align-items-center">
                        <h4 class="m-2">${data.data.attributes.name}  </h4>
                        <div class="mb-3 px-2 border-gray border border-black d-inline-block rounded-1 fw-bold">
                            <span class="border-end border-gray px-2">${parts[0]}</span>
                            <span class="border-end border-gray px-2">${parts[1]}</span>
                            <span>${parts[2]}</span>
                        </div>
                    </div>
                    </div>
                `
      }
    },
    {
      data: 'id',
      className: '',
      render: function (row, type, data) {

        moment(data.attributes.startDate).format('DD MMM YYYY')
        return `
                    <div>
                      <time>${moment(data.attributes.startDate).format('DD MMM YYYY')}</time> - <time>${moment(data.attributes.startDate).format('HH:mm:ss')}</time>
                    </div>
                    <div>
                      <time>${moment(data.attributes.endDate).format('DD MMM YYYY')}</time> - <time>${moment(data.attributes.endDate).format('HH:mm:ss')}</time>
                    </div>
                `
      }
    },
    {
      data: 'attributes.mainDriver',
      className: '',
      render: function (data) {

        return `
                    <div class="d-flex align-items-center flex-column">
                      <h4 class="fw-normal mb-1">${data.data.attributes.firstName} ${data.data.attributes.lastName}</h4>
                      <a href="tel:${data.data.attributes.phone}" class="text-muted">${data.data.attributes.phone}</a>
                    </div>
                `
      }

    },
    {
      data: 'attributes.totalCost',
    },
    {
      data: 'attributes',
      className: '',
      render: function (data, type, row) {

        let tpayment = data.payments.data
        const payments = [];
        let totalAmount = 0;

        tpayment.forEach(payment => {
          totalAmount += payment.attributes.amount;
        })

        let total = data.totalCost

        const difference = total - totalAmount;
        const percentageIncrease = (totalAmount / total) * 100;


        return `
                    <div class="row align-items-center g-0">
                      <div class="col-auto">
                        <span class="me-2">${percentageIncrease.toFixed(0)}%</span>
                      </div>
                      <div class="col">
                        <div class="progress progress-sm">
                          <div class="progress-bar ${percentageIncrease == 100 ? "bg-success" : "bg-warning"} " role="progressbar" style="width: ${percentageIncrease}%" aria-valuenow="${percentageIncrease}" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                `
      }
    },
    {
      data: 'attributes.status',
      render: function (data) {

        const VStatus = (statu) => {
          switch (statu) {
            case "Pending":
              return `
                        <span class="badge bg-warning">
                            ${statu}
                        </span>
                `
              break;
            case "Cancelled":
              return `
                        <span class="badge bg-danger">
                            ${statu}
                        </span>
                `
              break;
            case "Confirmed":
              return `
                    <span class="badge bg-success">
                        ${statu}
                    </span>
                `
              break;

            default:
              return `
                    <span class="badge bg-primary">
                        ${statu}
                    </span>
                `
              break;
          }
        }
        return `
                ${VStatus(data)}
                `
      }
    },
    {
      data: 'id',
      render: function (data) {
        return `
                <div class="d-flex align-items-center">
                      <a href="n-contrat.html?id=${data}" class="btn btn-white border-0 rounded-circle ms-0 singleEmailArchive" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Voir">
                        <span class="fe fe-eye"></span>
                      </a>

                      <button class="btn btn-white border-0 rounded-circle ms-0 singleEmailArchive" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Archive">
                        <span class="fe fe-edit-2"></span>
                      </button>
                      <div class="dropdown ms-2">
                        <a class="dropdown-ellipses dropdown-toggle" href="crm-contacts.html#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="fe fe-more-vertical"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#prologationContrat">
                            Prologation
                          </a>
                          <a href="#" class="dropdown-item"> Terminé</a>
                          <hr>
                          <a href="#" class="dropdown-item text-warning">
                            Dammage
                          </a>
                          <a href="#" class="dropdown-item text-danger">
                            Annuler
                          </a>
                        </div>
                      </div>

                    </div>
                `
      }
    },
    // {
    //     data: 'id',
    //     className: "d-flex align-items-center mb-2",
    //     render: function (data, type, row) {

    //         return `
    //             <div class="avatar avatar-sm me-3">
    //                 <span class="avatar-title rounded-circle">
    //                 ${row.attributes.LastName.charAt(0).toUpperCase()}${row.attributes.FirstName.charAt(0).toUpperCase()}
    //                 </span>
    //             </div>
    //             <b class='m-0'>${row.attributes.LastName} ${row.attributes.FirstName}</b>
    //             `
    //     },
    // },


  ]

  var myData = {};

  const initDatatable = new DataTable('#listContrats', {
    processing: true,
    bPaginate: false,
    columns: columns,
    bFilter: true,
    language: {
      searchPlaceholder: "Recherche"
    },
    bInfo: true,
    order: [[0, "desc"]],
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
