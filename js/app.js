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
})

/* ============================================= */
/*                 Traffic Chart                 */
/* ============================================= */

const trafficCanvas = document.getElementById("traffic-cahrt");

let trafficData = {
    labels: [ "16-22", "23-29", "30-5", "6-12", "13-19", 
    "20-26", "27-3", "4-10", "11-17", "18-24", "25-31" ],
    
    datasets: [ { 
        
        data: [ 750, 1250, 1000, 2000, 1500, 1750, 
            1250, 1850, 2250, 1500, 2500 ],
        backgroundColor: "rgba( 116, 119, 191, .3)",
        borderWidth: 1,
        
    } ]
}