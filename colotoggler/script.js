function togglerRed() {

    let cbox = document.querySelector("#id_colorbox")
    cbox.classList.remove("bg-dark", "bg-success")
    cbox.classList.add("bg-danger")
}
function togglerGreen() {

    let cbox = document.querySelector("#id_colorbox")
    cbox.classList.remove("bg-dark", "bg-danger")
    cbox.classList.add("bg-success")
}