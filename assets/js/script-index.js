const APICars = `https://panel.tomobila.com/api/vehicles/?populate=*`;
const APIBookings = `https://panel.tomobila.com/api/bookings/?populate=*`;

const localhost = "https://panel.tomobila.com"

function determineColorBasedOnResource(resourceStatus) {
    // Define your logic to assign colors based on resourceId
    const resourceColorMap = {
        'Pending': 'orange',
        'Confirmed': 'green',
        'Cancelled': '#e63757'
    };
    return resourceColorMap[resourceStatus] || '#1a49f8'; // Fallback color
}

document.addEventListener("DOMContentLoaded", async function () {

    var calendarEl = document.getElementById('calendar');

    Promise.all([
        fetch(APICars), // Endpoint for resources
        fetch(APIBookings) // Endpoint for events
    ])
        .then(responses => Promise.all(responses.map(res => {
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
        })))
        .then(data => {
            const [resourcesData, eventsData] = data;

            // Transform resources
            const ressources = resourcesData.data.map(item => ({
                id: item.id,
                title: item.attributes.name,
                img: localhost + item.attributes.mainImage.data.attributes.url,
                // eventColor: '#1a49f8',
            }));

            // Transform events
            const events = eventsData.data.map(event => ({
                id: event.id,
                title: event.attributes.mainDriver.data.attributes.firstName + " " + event.attributes.mainDriver.data.attributes.lastName,
                start: event.attributes.startDate,
                end: event.attributes.endDate,
                resourceId: event.attributes.vehicle.data.id,
                eventColor: determineColorBasedOnResource(event.attributes.status),
            }));

            console.log(ressources, events);

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
                resources: ressources,
                events: events,
                initialDate: new Date(),
                // initialDate: new Date().toISOString().split('T')[0],
                editable: true,
                selectable: true,
                resourceAreaHeaderContent: 'Vehicules',

                dayCellContent: function (arg) {
                    arg.dayNumberText = arg.dayNumberText.replace(/.*(\d{1,2}).*/, '$1');
                },
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
                    img.src = resource.extendedProps.img;

                    let title = document.createElement('p');
                    title.classList.add('m-0');
                    title.innerText = resource.title;

                    container2.appendChild(img)


                    container.appendChild(container2);
                    container.appendChild(title);

                    return { domNodes: [container] };
                },
                eventContent: function (arg) {
                    // console.log('====================================');
                    // console.log(arg);
                    // console.log('====================================');
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
                    <div class="d-flex" style="background:${event.extendedProps.eventColor}">
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


        })
        .catch(error => {
            console.error('Failed to fetch data:', error);
        });

})