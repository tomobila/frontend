
const client = {
    id: 4,
    name: 'Azaf car'
}

const APIScanCustomerId = "https://docai.api.tomobila.com/api/v1/upload/customer-id"
const APIScanCar = "https://docai.api.tomobila.com/api/v1/upload/car-registration"
const APICar = `http://localhost:1337/api/cars/`

// const APICars = `http://localhost:1337/api/cars/?populate=*&filters[Agency][id][$eq]=${client.id}`;
const localhost = "http://localhost:1337"


document.addEventListener("DOMContentLoaded", function () {

    const car_brands = document.getElementById("car_brands");
    const car_model = document.getElementById("car_model");
    const car_nb_places = document.getElementById("car_nb_places");
    const car_fuel = document.getElementById("car_fuel");
    const car_immatriculation_w = document.getElementById("car_immatriculation_w");
    const car_immatriculation = document.getElementById("car_immatriculation");
    const car_first_use = document.getElementById("car_first_use")


    const marque = document.getElementById("n-marque")
    const model = document.getElementById("n-model")
    const immatriculation = document.getElementById("n-immatriculation")
    const nchassis = document.getElementById("n-nchassis")
    const fuyel = document.getElementById("n-fuyel")
    const exdate = document.getElementById("n-exdate")
    const nbplaces = document.getElementById("n-nbplaces")

    var cropper;

    const fileRecto = document.getElementById("fileRecto")
    const fileRecto2 = document.getElementById("fileRecto2")
    const scan = document.querySelector("#formscanCar");

    scan.addEventListener("click", async (event) => {
        event.preventDefault();

        const formData = new FormData();
        const loaderScan = document.querySelector(".loaderScan");
        const componentScan = document.querySelector(".componentScan");
        const carDetailsScan = document.querySelector(".carDetailsScan");


        loaderScan.classList.remove('d-none')
        componentScan.classList.add("opacity-0")

        let f1 = fileRecto.files[0];
        let f2 = fileRecto2.files[0];

        formData.append("upload", f1);
        formData.append("upload", f2);

        // for (let i = 0; i < fileInput.length; i++) {
        //     formData.append("upload", fileInput[i]);
        // }

        // if (fileInput.length < 2) {
        //     alert("Please select files to upload.");
        //     return;
        // }

        const response = await fetch(APIScanCar, {
            method: "POST",
            body: formData,
        });

        response.json().then(data => {
            console.log(data.data);
            let DATA = data.data

            loaderScan.classList.add('d-none')
            componentScan.classList.remove("opacity-0")
            carDetailsScan.classList.remove('d-none')


            // console.log(data.data.brand)
            car_brands.value = String(DATA.brand.charAt(0).toUpperCase() + DATA.brand.slice(1).toLowerCase());
            car_model.value = String(DATA.model.charAt(0).toUpperCase() + DATA.model.slice(1).toLowerCase());
            car_nb_places.value = DATA.numberOfSeats
            car_fuel.value = DATA.fuelType

            let index = DATA.registrationNumber.indexOf("MA") + 2; // Get the index right after "MA"
            let resultRegistrationNumber = DATA.registrationNumber.substring(index);


            car_immatriculation.value = resultRegistrationNumber
            car_immatriculation_w.value = resultRegistrationNumber
            car_first_use.value = DATA.firstRegistrationDate
            console.log(new Date(DATA.firstRegistrationDate))

            marque.innerHTML = String(DATA.brand.charAt(0).toUpperCase() + DATA.brand.slice(1).toLowerCase());
            model.innerHTML = String(DATA.model.charAt(0).toUpperCase() + DATA.model.slice(1).toLowerCase());
            immatriculation.innerHTML = resultRegistrationNumber
            nchassis.innerHTML = DATA.chassisNumber
            fuyel.innerHTML = DATA.fuelType
            exdate.innerHTML = DATA.expiryDate
            nbplaces.innerHTML = DATA.numberOfSeats

        }).catch(error => {
            loaderScan.classList.add('d-none')
            componentScan.classList.remove("opacity-0")
            carDetailsScan.classList.add('d-none')
            console.error('Error:', error);
        });
    });



    const frameRecto = document.querySelector('#frameRecto')
    const frameRecto2 = document.querySelector('#frameRecto2')

    const previewRecto = document.querySelector('#previewRecto')
    const previewRecto2 = document.querySelector('#previewRecto2')

    const clearframeRecto = document.querySelector("#clearframeRecto")
    const clearframeRecto2 = document.querySelector("#clearframeRecto2")

    // UPLOAD FILE

    fileRecto.addEventListener('change', () => {

        const imageRecto = document.querySelector("#imageRecto");

        let file = fileRecto.files[0]

        if (file) {
            previewRecto.classList.remove("d-none");
            frameRecto.src = URL.createObjectURL(file)
            imageRecto.src = URL.createObjectURL(file)
            $('#cropperModal').modal('show');

            // cropper = new Cropper(imageRecto, {
            //     aspectRatio: 16 / 9,
            //     crop: function (e) {
            //         // console.log(e.detail.width);
            //         // console.log(e.detail.height);
            //     },
            //     viewMode: 3,
            //     autoCropArea: 1,
            //     center: true,
            //     dragMode: 'move',
            //     responsive: true,
            //     restore: true,
            //     rotatable: true,
            //     scalable: true
            // });

        }

    })

    $('#cropperModal').on('shown.bs.modal', function () {
        cropper = new Cropper(imageRecto, {
            aspectRatio: 16 / 9,
            viewMode: 3,
            autoCropArea: 1,
            responsive: true,
            restore: true,
            dragMode: 'move',
            rotatable: true,
            scalable: true,
            // guides: true,
            // cropBoxMovable: true,
            // cropBoxResizable: true,
        });
        // Force cropper to recalculate dimensions
        cropper.reset();
        // setTimeout(function () {
        //     cropper.reset();
        //     cropper.setCanvasData(cropper.getCanvasData()); // Ensure dimensions are recalculated
        // }, 200);
    }).on('hidden.bs.modal', function () {
        cropper.destroy();
        cropper = null;
    })

    document.getElementById('cropButton').addEventListener('click', function () {
        var canvas = cropper.getCroppedCanvas();
        var dataUrl = canvas.toDataURL();
        console.log(dataUrl);
        frameRecto.src = dataUrl
        $('#cropperModal').modal('hide');
        cropper.destroy();
        cropper = null;

    });


    fileRecto2.addEventListener('change', () => {

        let file = fileRecto2.files[0]
        if (file) {

            previewRecto2.classList.remove("d-none");
            frameRecto2.src = URL.createObjectURL(file)
        }

    })

    clearframeRecto.addEventListener("click", (e) => {
        e.stopPropagation()
        e.preventDefault()

        previewRecto.classList.add("d-none");
        frameRecto.src = ""

        let img = document.querySelectorAll('.ml__signature_view--img img')
        let containerImg = document.querySelectorAll(".ml__signature_view--img")

        img.forEach(item => {
            item.src = ""
        })

        containerImg.forEach(item => {
            item.classList.add("d-none")
        })

    })
    clearframeRecto2.addEventListener("click", (e) => {
        e.stopPropagation()
        e.preventDefault()

        previewRecto2.classList.add("d-none");
        frameRecto2.src = ""


    })




    saveCar.addEventListener("click", async (e) => {
        e.preventDefault();

        const jsonData = {
            data: {
                Make: marque.innerText,
                Model: model.innerText
            }
        };

        const jsonString = JSON.stringify(jsonData);

        try {
            // Send the POST request with JSON data
            const response = await fetch(APICar, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: jsonString
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Data added successfully:', data);
        } catch (error) {
            console.error('Error adding data:', error);
        }
    });


})