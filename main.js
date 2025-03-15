const btn1 = document.querySelector(".wanda")
const btn2 = document.querySelector(".agatha")
const btn3 = document.querySelector(".vison")
const btn4 = document.querySelector(".quicksilver")
const btn5 = document.querySelector(".hulk")
const elem1 = document.querySelector("body")



btn1.addEventListener("click", () => {
    btn1.textContent = "wanda maximov"
    elem1.style.backgroundColor = "red"
})
btn2.addEventListener("click", () => {
    btn2.textContent = "agatha harkness"
    elem1.style.backgroundColor = "rgb(30, 6, 53)"
})
btn3.addEventListener("click", () => {
    btn3.textContent = "vison maximov"
    elem1.style.backgroundColor = "yellow"
})
btn4.addEventListener("click", () => {
    btn4.textContent = "pedro maximov"
    elem1.style.backgroundColor = "cyan"
})
btn5.addEventListener("click", () => {
    btn5.textContent = "hulk"
    elem1.style.backgroundColor = "green"
    
    
})








console.log(btn1);
console.log(btn2);
console.log(btn3);
console.log(btn4);
console.log(btn5);
console.log(elem1);
