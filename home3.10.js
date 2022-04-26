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


let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let day = this.getDate();

let monthIndex = this.getMonth();
let monthName = monthNames[monthIndex];

let year = this.getFullYear();
console.log(`${day} ${monthName},${year}`)

function getToday() {
    document.getElementById("now").innerHTML = Date()
}
