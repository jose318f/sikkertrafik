let data = [100, 45, 75];

document.querySelectorAll(".bars .bar").forEach((sojle, i) => {

    sojle.setAttribute("y2", (200 - (1.8 * data[i])));
    sojle.setAttribute("data-value", data[i]);

})


document.querySelector(".bars").addEventListener("mouseover", e => {

    document.querySelector("#info").innerHTML =
        e.target.getAttribute("data-value") + "%";
    console.log(e.target.getAttribute("data-value"));

})
