import kol4a from "../data/kol4a.json" with {
  type: "json"
}
const btn = document.querySelectorAll(".pre-btn")
const modalBox1 = document.getElementById("vibor-kole4")
let box = document.getElementById("box")
let boxOverlay = document.getElementById("box-overlay")
let modalBox_h2 = document.getElementById("modalBox-h2")
let modalBox_p = document.getElementById("modalBox-p")
let modalBox_prise = document.getElementById("modalBox-prise")
let modalBox_img = document.getElementById("modalBox-img")
btn.forEach(btn => {
  btn.addEventListener("click", (e) => {
    boxOverlay.style.display = "block"
    btnNumber(btn.id.split("-")[2])
    console.log(btn.id.split("-")[2])
  })
})


window.addEventListener("click", (e) => {
  if (e.target === boxOverlay) {
    boxOverlay.style.display = "none"
  }
})
function btnNumber(btn) {
  let el = kol4a[+btn - 1]
  console.log(el.nazvanie)
  if (btn === "1") {
    modalBox_h2.textContent = el.nazvanie
    modalBox_p.textContent = el.opisan4ik
    modalBox_prise.textContent = el.k4ena
    modalBox_img.setAttribute("src",el.fotikys) 
  }
  if (btn === "2") {
    modalBox_h2.textContent = el.nazvanie
    modalBox_p.textContent = el.opisan4ik
    modalBox_prise.textContent = el.k4ena
    modalBox_img.setAttribute("src",el.fotikys)
  }
  if (btn === "3") {
    modalBox_h2.textContent = el.nazvanie
     modalBox_p.textContent = el.opisan4ik
    modalBox_prise.textContent = el.k4ena
    modalBox_img.setAttribute("src",el.fotikys)
  }
  if (btn === "4") {
    modalBox_h2.textContent = el.nazvanie
    modalBox_p.textContent = el.opisan4ik
    modalBox_prise.textContent = el.k4ena
    modalBox_img.setAttribute("src",el.fotikys)
  }
  if (btn === "5") {
    modalBox_h2.textContent = el.nazvanie
    modalBox_p.textContent = el.opisan4ik
    modalBox_prise.textContent = el.k4ena
    modalBox_img.setAttribute("src",el.fotikys)
  }
  if (btn === "6") {
    modalBox_h2.textContent = el.nazvanie
    modalBox_p.textContent = el.opisan4ik
    modalBox_prise.textContent = el.k4ena
    modalBox_img.setAttribute("src",el.fotikys)
  }
  if (btn === "7") {
    modalBox_h2.textContent = el.nazvanie
    modalBox_p.textContent = el.opisan4ik
    modalBox_prise.textContent = el.k4ena
    modalBox_img.setAttribute("src",el.fotikys)
  }
  if (btn === "8") {
    modalBox_h2.textContent = el.nazvanie
    modalBox_p.textContent = el.opisan4ik
    modalBox_prise.textContent = el.k4ena
    modalBox_img.setAttribute("src",el.fotikys)
  }
  if (btn === "9") {
    modalBox_h2.textContent = el.nazvanie
    modalBox_p.textContent = el.opisan4ik
    modalBox_prise.textContent = el.k4ena
    modalBox_img.setAttribute("src",el.fotikys)
  }
  if (btn === "10") {
    modalBox_h2.textContent = el.nazvanie
    modalBox_p.textContent = el.opisan4ik
    modalBox_prise.textContent = el.k4ena
    modalBox_img.setAttribute("src",el.fotikys)
  }
  if (btn === "11") {
    modalBox_h2.textContent = el.nazvanie
    modalBox_p.textContent = el.opisan4ik
    modalBox_prise.textContent = el.k4ena
    modalBox_img.setAttribute("src",el.fotikys)
  }
  if (btn === "12") {
    console.log(btn)
    modalBox_h2.textContent = el.nazvanie
    modalBox_p.textContent = el.opisan4ik
    modalBox_prise.textContent = el.k4ena
    modalBox_img.setAttribute("src",el.fotikys)
  }
  if (btn === "13") {
    modalBox_h2.textContent = el.nazvanie
    modalBox_p.textContent = el.opisan4ik
    modalBox_prise.textContent = el.k4ena
    modalBox_img.setAttribute("src",el.fotikys)
  }
}