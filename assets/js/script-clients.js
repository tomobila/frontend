const client = {
  id: 1,
  name: 'Azaf car'
}

const APIScanCustomerId = "https://docai.api.tomobila.com/api/v1/upload/customer-id"

const localhost = "https://panel.tomobila.com"
// const APIClients = `http://localhost:1338/api/agencies/1?populate[agency_customers][populate]=*`;
const APICustomer = "https://panel.tomobila.com/api/customers/"
// const newApiCustomers = `http://localhost:1338/api/customers/?populate[agency_customer][populate]=agency&filters[agency_customer][agency][id][$eq]=1`
const newApiCustomers = 'https://panel.tomobila.com/api/customers/?populate=*&filters[agency][id][$eq]=1'

const paginatedLenght = 5
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
const tableColumns = [
  {
    data: 'id',
    render: function (data, type, row) {

      return `
                <div class="d-flex align-items-center mb-2">

                    <div class="avatar avatar-sm me-3">
                        <span class="avatar-title rounded-circle">
                        ${row.attributes.lastName.charAt(0).toUpperCase()}${row.attributes.firstName.charAt(0).toUpperCase()}
                        </span>
                    </div>
                    <b class='m-0'>${row.attributes.lastName} ${row.attributes.firstName}</b>
                </div>`
    },
  },
  {
    data: 'attributes.createdAt',
    render: function (data, type, row) {
      return moment(data).format('DD MMM YYYY')
    }
  },
  {
    data: 'attributes.phone',
  },
  {
    data: 'attributes.idNumber',
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
      return `
            <div class="px-2 d-flex align-items-center">
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

function populateEditForm(customer) {
  document.getElementById('editCustomerId').value = customer.id;
  document.getElementById('editFirstName').value = customer.attributes.firstName;
  document.getElementById('editLastName').value = customer.attributes.lastName;
  document.getElementById('editEmail').value = customer.attributes.email;
  document.getElementById('editPhone').value = customer.attributes.phone;
  document.getElementById('editDateOfBirth').value = customer.attributes.DateOfBirth;
  document.getElementById('editDriverLicenseNumber').value = customer.attributes.driverLicenseNumber;
  document.getElementById('editAddress').value = customer.attributes.address;
  document.getElementById('editDriverLicenseExpiration').value = customer.attributes.driverLicenseExpiration;
  document.getElementById('editCniNumber').value = customer.attributes.idNumber;
  document.getElementById('editCniExpiration').value = customer.attributes.cniExpiration;
  // document.getElementById('editIsBlacklisted').checked = customer.isBlacklisted;
  // document.getElementById('editBlacklistReason').value = customer.blacklistReason;
}

document.addEventListener("DOMContentLoaded", async function () {
  var notyf = new Notyf();
  fetch(newApiCustomers)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

  var myData = {}

  const listClients = new DataTable('#listClients', {
    processing: true,
    bPaginate: true,
    dom: '<"top"fl>rt<"bottom"ip>',
    pageLength: 10,
    bFilter: true,
    language: {
      searchPlaceholder: "Recherche",
      lengthMenu: ' _MENU_ ',
      paginate: {
        previous: '<a class="" href="#"><i class= "fe fe-arrow-left ms-1" ></i></a> ', // Custom Previous button with an icon
        next: '<a class="" href="#"><i class= "fe fe-arrow-right ms-1" ></i></a> ', // Custom Previous button with an icon
      },
      processing: loaderEmails
    },
    bInfo: true,
    columns: tableColumns,
    order: [[1, "desc"]],
    // fnInfoCallback: function (oSettings, iStart, iEnd, iMax, iTotal, sPre) {
    //   return `${iStart}-${iEnd} to ${iTotal}`;
    // },
    ajax: {
      url: newApiCustomers,
      type: "GET",
      data: function (d) {
        return $.extend(d, myData);
      },
    },
  })


  var carIdToDelete = 0;

  listClients.on('draw', function () {

    const singleCustomerDelete = document.querySelectorAll(".singleCustomerDelete");
    const singleCustomerEdit = document.querySelectorAll(".singleCustomerEdit");

    singleCustomerEdit.forEach(item => {
      item.addEventListener('click', event => {
        event.stopPropagation();
        // const customerIdToEdit = item.getAttribute('data-item-id');
        // const customer = flattenedData.find(c => c.id == customerIdToEdit);
        const customerIdToEdit = item.getAttribute('data-item-id');
        fetch(`${APICustomer}${customerIdToEdit}`)
          .then(response => response.json())
          .then(customer => {

            populateEditForm(customer.data);
            $('#editModal').modal('show');
          });
        // populateEditForm(customer);
        // $('#editModal').modal('show');

      });
    });
    singleCustomerDelete.forEach(item => {

      item.addEventListener('click', event => {

        event.stopPropagation();
        carIdToDelete = item.getAttribute('data-item-id');
        $('#confirmationModal').modal('show');

      });
    });
  })


  // DELETE Customer
  const deleteButton = document.getElementById('confirmDelete')
  deleteButton.addEventListener('click', function () {
    if (carIdToDelete != 0) {

      fetch(`${APICustomer}${carIdToDelete}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
            notyf.error({
              message: "Network response was not ok",
              duration: 1500,
              position: {
                x: "center",
                y: "bottom",
              },
            })
          }
          return response.json();
        })
        .then(data => {
          listClients.ajax.reload();
          $('#confirmationModal').modal('hide');
          notyf.success({
            message: "Item deleted successfully",
            duration: 1500,
            position: {
              x: "center",
              y: "bottom",
            },
          })
          carIdToDelete = 0;
        })
        .catch(error => {
          listClients.ajax.reload();
          $('#confirmationModal').modal('hide');
          carIdToDelete = 0;
        });
    }
  })

  // EDIT CUSTOMER

  const saveEditCustomerButton = document.getElementById('saveEditCustomer');
  saveEditCustomerButton.addEventListener('click', function () {
    const customerId = document.getElementById('editCustomerId').value;
    const updatedCustomer = {
      data: {
        firstName: document.getElementById('editFirstName').value,
        lastName: document.getElementById('editLastName').value,
        email: document.getElementById('editEmail').value,
        phone: document.getElementById('editPhone').value,
        dateOfBirth: document.getElementById('editDateOfBirth').value,
        driverLicenseNumber: document.getElementById('editDriverLicenseNumber').value,
        address: document.getElementById('editAddress').value,
        driverLicenseExpiration: document.getElementById('editDriverLicenseExpiration').value,
        idNumber: document.getElementById('editCniNumber').value,
        cniExpiration: document.getElementById('editCniExpiration').value,
        // isBlacklisted: document.getElementById('editIsBlacklisted').checked,
        // blacklistReason: document.getElementById('editBlacklistReason').value
      }
    };

    fetch(`${APICustomer}${customerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedCustomer)
    })
      .then(response => response.json())
      .then(data => {
        listClients.ajax.reload();
        $('#editModal').modal('hide');
        notyf.success({
          message: "Customer updated successfully",
          duration: 1500,
          position: {
            x: "center",
            y: "bottom",
          },
        });
      })
      .catch(error => {
        console.error('Error:', error);
        notyf.error({
          message: "Failed to update customer",
          duration: 1500,
          position: {
            x: "center",
            y: "bottom",
          },
        });
      });
  });



})
