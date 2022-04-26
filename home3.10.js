let form_elem = document.querySelector("#box_1")

function getTheForm() {
    let class_length = form_elem.classList.length

    form_elem.classList.toggle("enter")
}

console.log(form_elem.classList.length)



function getTheBulbOn() {
    document.getElementById("img1").src = "lightOff.png"
}

function getTheBulbOff() {
    document.getElementById("img1").src = "lightOn.png"
}


function getToday() {
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let now = new Date()
    let day = now.getDate();

    let monthIndex = now.getMonth();
    let monthName = monthNames[monthIndex];

    let year = now.getFullYear();
    document.getElementById("now").innerHTML = `${day} ${monthName},${year}`
}
