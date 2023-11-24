let btnArea = document.querySelector('[data-calculate]')
let height = document.getElementById('height').value
let width = document.getElementById('width').value
let display = document.getElementById('output')


btnArea.addEventListener('click',function(){

    let height = document.getElementById('height').value
    let width = document.getElementById('width').value
    area(width,height)
})


function area(a,b) {
    let sum = 1/2*(a*b);
    display.innerText = sum
}