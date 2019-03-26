//let data = [55, 490, 84, 310];

//document.querySelectorAll(".bars .bar").forEach((sojle, i) => {

//    sojle.setAttribute("y2", (200 - (1.8 * data[i])));
//    sojle.setAttribute("data-value", data[i]);

//})


//document.querySelector(".bars").addEventListener("mouseover", e => {

//  document.querySelector("#info").innerHTML =
//      e.target.getAttribute("data-value") + "%";
//  console.log(e.target.getAttribute("data-value"));

//})
document.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("SidenVises");

    document.querySelector(".search").addEventListener("click", skiftPic);
}

function skiftPic() {
    console.log("SkiftBillede")

    document.querySelector("#map").classList.add("hide");

    document.querySelector("#map2").classList.remove("hide");
}

window.addEventListener("load", sidenVises);



function sidenVises() {
    console.log("siden vises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("Toggle menu");
    document.querySelector(".menu").classList.toggle("hidden");

    let erSkjult =
        document.querySelector(".menu").classList.contains("hidden");

    if (erSkjult == true) {
        //menu er nu skjult - ændre menu til burger
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        //menu er nu vist - ændre menu til x
        document.querySelector("#menuknap").textContent = "✖";
    }

}
