
document.addEventListener("DOMContentLoaded", async function () {
    const notyf = new Notyf();
    const APICustomer = "https://panel.tomobila.com/api/customers/"

    const saveCreateCustomerButton = document.getElementById('saveCreateCustomerButton');
    saveCreateCustomerButton.addEventListener('click', function (event) {
        event.preventDefault()
        const newCustomer = {
            data: {
                firstName: document.getElementById('createFirstName').value,
                lastName: document.getElementById('createLastName').value,
                email: document.getElementById('createEmail').value,
                phone: document.getElementById('createPhone').value,
                dateOfBirth: document.getElementById('createDateOfBirth').value,
                driverLicenseNumber: document.getElementById('createDriverLicenseNumber').value,
                address: document.getElementById('createAddress').value,
                driverLicenseExpiration: document.getElementById('createDriverLicenseExpiration').value,
                cniNumber: document.getElementById('createCniNumber').value,
                cniExpiration: document.getElementById('createCniExpiration').value,
                // isBlacklisted: document.getElementById('createIsBlacklisted').checked,
                // blacklistReason: document.getElementById('createBlacklistReason').value
            }
        };

        fetch(APICustomer, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCustomer)
        })
            .then(response => {
                if (response.status === 200 || response.status === 201) {
                    return response.json();
                } else {
                    throw new Error('Failed to create customer');
                }
            })
            .then(data => {
                // $('#createModal').modal('hide');
                notyf.success({
                    message: "Customer created successfully",
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
                    message: "Failed to create customer",
                    duration: 1500,
                    position: {
                        x: "center",
                        y: "bottom",
                    },
                });
            });
    });
});