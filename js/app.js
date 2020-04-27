/* ============================================= */
/*                 Alert Banner                  */
/* ============================================= */

// GET ALERT DIV
const alertBanner = document.getElementById("alert");

// CREATE ALERTBANNER WITH TEMPLATE LITERAL
alertBanner.innerHTML = 
`
    <div class="alert-banner">
        <p> <strong>Alert: </strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">X</p>
    </div>
`

// ADD CLICK EVENT LISTENER FOR HIDE DISPLAY BANNER
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if( element.classList.contains("alert-banner-close") ) {
        alertBanner.style.display = "none";
    }
} );


/* ============================================= */
/*                 Traffic Chart                 */
/* ============================================= */

const trafficCanvas = document.getElementById("traffic-chart").getContext('2d');

// SET ACTIVE CLASS TO TRAFFIC NAV LINK WHEN IS CLICKED
const trafficNavData = document.querySelector('.traffic-nav');
const navList = trafficNavData.getElementsByClassName("traffic-nav-link")

// HOURLY DATA SET
const hourlyDataValues = [ 10, 30, 00, 40, 10, 50, 10, 20, 30, 40, 40, 40 ];

// DAILY DATA SET
const dailyDataValues = [ 750, 1250, 1000, 2000, 1500, 1750, 
    1250, 1850, 2250, 1500, 2500 ];

// WEEKLY DATA SET
const weeklyDataValues = [ 530, 450, 919, 1200, 480, 2000, 501, 667, 992, 1400, 1433, 2009 ];

// MONTHLY DATA SET
const monthlyDataValues = [ 4500, 6000, 4000, 7000, 5500, 3003, 1000, 7500, 2000, 3500, 6500 ];

let trafficData = {
    labels: [ "16-22", "23-29", "30-5", "6-12", "13-19", 
    "20-26", "27-3", "4-10", "11-17", "18-24", "25-31" ],
    
    datasets: [ { 
        
        data: dailyDataValues,
        backgroundColor: "rgba( 116, 119, 191, .3)",
        borderWidth: 1,
        pointBackgroundColor: "rgba( 255, 255, 255, 1 )",
        pointBorderColor: "rgba( 116, 119, 191, 1)",
        
    } ]
}

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 1000,
        easing: 'easeInOutSine'
    },
    scales: {
        
        // Y AXES FONT SIZE
        yAxes: [ {
            ticks: {
                beginAtZero: true,

            }
        }],

        // X AXES FONT SIZE
        xAxes: [ {
            ticks: {

            }
        }]
    },
    legend: {
        display: false,
    },
    elements: {
        line: {
            tension: 0
        },
        point: {
            radius: 7,
            hoverRadius: 10
        }
    }
};

let trafficChart = new Chart( trafficCanvas, {
    type: "line",
    data: trafficData,
    options: trafficOptions
} );


/* ============================================= */
/*      Active calss toggle and data change      */
/* ============================================= */

function changeDataAndToggleActive(event, value) {
    // GET CURRENT ACTIVE CLASS AND REMOVE
    let current = document.getElementsByClassName("active")[0];
    current.classList.remove("active");

    // ADD ACTIVE CLASS TO CLICKED ELEMENT
    event.classList.add("active");

    // CHANGE CHART DATA SET WHEN CLICKED
    trafficChart.data.datasets[0].data = value;
    trafficChart.update()
}

// trafficTime = {
//     "Hourly": changeDataAndToggleActive(e.target, hourlyDataValues),
//     "Daily": changeDataAndToggleActive(e.target, dailyDataValues),
//     "Weekly": changeDataAndToggleActive(e.target, weeklyDataValues),
//     "Monthly": changeDataAndToggleActive(e.target, monthlyDataValues),
// }

// trafficTime[e.target.textContent]

// ADD EVENT LISTENER TO UNORDER LIST TO CHANGE CHART
trafficNavData.addEventListener('click', e => {
    // TARGET BY UNORDER LIST TEXT CONTENT
    const list = e.target;
    const listValue = e.target.textContent;
    // console.log(list)
    if(listValue === 'Hourly') {
        changeDataAndToggleActive(list, hourlyDataValues)
    } else if (listValue === 'Daily') {
        changeDataAndToggleActive(list, dailyDataValues)
    } else if (listValue === 'Weekly') {
        changeDataAndToggleActive(list, weeklyDataValues)
    } else if (listValue === 'Monthly') {
        changeDataAndToggleActive(list, monthlyDataValues)
    }
})


/* ============================================= */
/*                 Daily Chart                   */
/* ============================================= */

const dailyCanvas = document.getElementById("daily-chart");

// DATA FOR DAILY TRAFFIC BAR CHART
const dailyData = {
    labels: [ "S", "M", "T", "W", "T", "F", "S" ],
    datasets: [ {
        label: "# of Hits",
        data: [ 75, 115, 175, 125, 225, 200, 100 ],
        backgroundColor: "#7477BF",
        borderWidth: 1
    } ]
};

const dailyOptions = {
    scales: {
        yAxes: [ {
            ticks: {
                beginAtZero: true
            }
        } ]
    },
    legend: {
        display: false
    }
}

let dailyChart = new Chart( dailyCanvas, {
    type: "bar",
    data: dailyData,
    options: dailyOptions
} );


/* ============================================= */
/*                 Mobile Chart                  */
/* ============================================= */

const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: [ "Phones", "Tablet", "Desktop" ],
    datasets: [ {
        label: "# of Users",
        data: [ 550, 500, 2000 ],
        borderWidth: 0,
        backgroundColor: [
            "#51B6C8",
            "#78CF82",
            "#7477BF",
        ]
    } ]
};

const mobileOptions = {
    legend: {
        position: "right",
        labels: {
            boxWidth: 20,
            fontStyle: "bold"
        }
    }
}

let mobileChart = new Chart(mobileCanvas, {
    type: "doughnut",
    data: mobileData,
    options: mobileOptions
} );


/* ============================================= */
/*                 Messaging Section             */
/* ============================================= */

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', (e) => {
    
    e.preventDefault();
    if ( user.value === "" && message.value === "" ) {
        alert("Please fill out user and message fields before sending");
    } else if ( user.value === "" ) {
        alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
} );


// LOCAL STORAGE SECTION TO SAVE SETTINGS

function supportsLocalStorage() {
    try{
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}
window.onload = function () {
    const emailCheckbox = document.querySelector(".email-checkbox");
    const profileCheckbox = document.querySelector(".profile-checkbox");
    const timeZone = document.getElementById("timezone");
    const saveBtn = document.getElementById("save");
    const cancelBtn = document.getElementById("cancel");

    if(supportsLocalStorage) {
        console.log('yes support');
        saveBtn.addEventListener('click', () => {
            console.log('btn event')
            localStorage.setItem('email', emailCheckbox.checked);
            localStorage.setItem('profile', profileCheckbox.checked);
            localStorage.setItem('timeZone', timeZone.selectedIndex);
        })
        emailCheckbox.checked = this.localStorage.getItem('email');
        profileCheckbox.checked = this.localStorage.getItem('profile');
    }
    console.log(emailCheckbox.checked);
    console.log(this.localStorage.getItem('email'))
    console.log(this.localStorage.getItem('profile'))
}

emailCheckbox.checked = JSON.parse(localStorage.getItem('email'));

console.log(localStorage.getItem('email'))












/* ============================================= */
/*                 MediaQuery JS Testing         */
/* ============================================= */

// const xs = window.matchMedia( "(min-width: 320px)" );
// const med = window.matchMedia( "(min-width: 768px)" );
// const lg = window.matchMedia( "(min-width: 1024px)" );
// window.addEventListener('resize', function widthChange() {
//     if (xs.matches) {
//         console.log('xs')
//         trafficChart.options.scales.xAxes[0].ticks.fontSize = 8
//         trafficChart.options.scales.yAxes[0].ticks.fontSize = 8
//         console.log(trafficChart.options.scales.xAxes[0].ticks.fontSize)
//     } 
//     if (med.matches) {
//         console.log('med')
//         trafficChart.options.scales.xAxes[0].ticks.fontSize = 12
//         trafficChart.options.scales.yAxes[0].ticks.fontSize = 12
//         console.log(trafficChart.options.scales.xAxes[0].ticks.fontSize)
//     } 
//     if (lg.matches) {
//         console.log('lg')
//         trafficChart.options.scales.xAxes[0].ticks.fontSize = 16
//         trafficChart.options.scales.yAxes[0].ticks.fontSize = 16
//         console.log(trafficChart.options.scales.xAxes[0].ticks.fontSize)
//     }
// });


// if(lg.matches) {
//     trafficChart.options.scales.xAxes[0].ticks.fontSize = 20
//     console.log('xsmall')

// } else if (med.matches) {
//     trafficChart.options.scales.xAxes[0].ticks.fontSize = 12
//     console.log('medium')
// } else if (xs.matches) {
//     trafficChart.options.scales.xAxes[0].ticks.fontSize = 8
// }

