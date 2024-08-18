const APICars = `https://panel.tomobila.com/api/vehicles/?populate=*`;
const localhost = "https://panel.tomobila.com"
var extractedData = []





document.addEventListener("DOMContentLoaded", async function () {

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        // headerToolbar: {
        //   center: 'dayGridMonth,resourceTimelineWeek' // buttons for switching between views
        // },
        slotLabelFormat: [
            { day: 'numeric' }, // top level of text
            // { weekday: 'short' } // lower level of text
        ],
        chedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
        headerToolbar: {
            left: 'title',
            center: '',
            right: 'prev,next resourceTimelineMonth,next15Days,next30Days'
        },
        views: {
            next15Days: {
                type: 'resourceTimeline',
                duration: { days: 15 },
                buttonText: '15 days'
            },
            next30Days: {
                type: 'resourceTimeline',
                duration: { days: 30 },
                buttonText: '30 days'
            }
        },
        initialView: 'resourceTimelineMonth',
        aspectRatio: 3.5,
        // initialDate: new Date(),
        // initialDate: new Date().toISOString().split('T')[0],
        editable: true,
        selectable: true,
        resourceAreaHeaderContent: 'Vehicules',
        // resources:
        //     [
        //         {
        //             "id": "a",
        //             "title": "Dacia A",
        //             "eventColor": "#1a49f8",
        //             "img": "https://lakzizcars.com/wp-content/uploads/2024/04/dacia-logan-2024lal-1.png",
        //         },
        //         {
        //             "id": "b",
        //             "title": "Duster black",
        //             "img": "https://lakzizcars.com/wp-content/uploads/2024/04/dacia-logan-2024lal-1.png",
        //             "eventColor": "#1a49f8"
        //         },
        //         {
        //             "id": "c",
        //             "title": "Ranf Rover C",
        //             "img": "https://lakzizcars.com/wp-content/uploads/2024/04/dacia-logan-2024lal-1.png",
        //             "eventColor": "#1a49f8"
        //         },
        //         {
        //             "id": "d",
        //             "title": "Mercedes C",
        //             "img": "https://lakzizcars.com/wp-content/uploads/2024/04/dacia-logan-2024lal-1.png",
        //             "eventColor": "green"
        //         }
        //     ]
        // ,
        dayCellContent: function (arg) {
            arg.dayNumberText = arg.dayNumberText.replace(/.*(\d{1,2}).*/, '$1');
        },
        events: [
            { id: '1', resourceId: 'a', title: 'Mehdi', start: '2024-07-03T10:00:00', end: '2024-07-13T12:00:00' },
            { id: '2', resourceId: 'a', title: 'Soufiane', start: '2024-07-13T13:00:00', end: '2024-07-23T15:00:00' },
            { id: '3', resourceId: 'c', title: 'Azahro', start: '2024-07-20T09:00:00', end: '2024-07-29T11:00:00' },
            { id: '1', resourceId: 'd', title: 'Rachid', start: '2024-07-11', end: '2024-07-16' },
            { id: '1', resourceId: 'd', title: 'Hamid', start: '2024-07-02', end: '2024-07-11' },
        ],
        windowResize: function (view) {
            console.log('The calendar has adjusted to a window resize');
        },
        resourceLabelContent: function (arg) {
            let resource = arg.resource;
            // console.log(resource)

            let HTLM = `
                <div class="d-flex align-items-center mb-2">
                    <div class="avatar avatar-4by3 align-middle me-3">
                        <img src="${resource.extendedProps.img}" class="avatar-img rounded p-1">
                    </div>
                    <p class="m-0">${resource.title} </p>
                    </div>`

            let container = document.createElement('div');
            container.classList.add('d-flex', 'align-items-center');

            let container2 = document.createElement('div');
            container2.classList.add('avatar', 'avatar-4by3', 'align-middle', 'me-3');

            let img = document.createElement('img')
            img.classList.add('avatar-img', 'rounded', 'p-1')
            img.src = resource.extendedProps.img; // Use the image URL from the resource

            let title = document.createElement('p');
            title.classList.add('m-0');
            title.innerText = resource.title;

            container2.appendChild(img)


            container.appendChild(container2);
            container.appendChild(title);

            return { domNodes: [container] };
        },
        eventContent: function (arg) {

            let event = arg.event;
            let now = new Date();
            let start = event.start;
            let end = event.end;

            let progress = 0;
            if (now > start && now < end) {
                progress = ((now - start) / (end - start)) * 100;
                console.log(progress);
            } else if (now >= end) {
                progress = 100;
            }

            let customHtml = `
                  <div class="fc-event-custom d-flex">
                    <div class="avatar avatar-xs me-3">
                        <img src="assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle" alt="...">
                    </div>
                    <div class="d-flex flex-1 w-100">

                      <div class="fc-event-progress-container w-100">
                         <div class="fc-event-title">${event.title}</div>
                        <div class="fc-event-progress-bar bg-white h-2" style="width: ${progress}%" ></div>
                      </div>
                      <span> ${Math.round(progress)}%</span>
                      
                    </div>
                </div>
                      `;
            return { html: customHtml };

            // <div class="fc-event-time">${event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${event.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        }
    });

    function updateAspectRatio() {
        if (window.innerWidth < 600) {
            calendar.setOption('aspectRatio', 0.75); // Example ratio for small screens
            calendar.setOption('headerToolbar', {
                left: 'title prev,next',
                center: '',
                right: ''
            });
        } else {
            calendar.setOption('aspectRatio', 3.5); // Example ratio for larger screens
        }
    }

    window.addEventListener('resize', updateAspectRatio);
    updateAspectRatio();
    calendar.render();



    fetch(APICars)

        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // console.log(data);
            extractedData = data.data.map(item => ({
                id: item.id,
                title: item.attributes.name,
                img: localhost + item.attributes.mainImage.data.attributes.url // Assuming the main image URL is needed
            }));

            console.log('====================================');
            console.log(extractedData)
            console.log('====================================');
            calendar.extractedData

            calendar.getResources().forEach(function (resource) {
                resource.remove();
            });

            extractedData.forEach(resource => {
                calendar.addResource(resource);
            });
            calendar.render();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
})