var cnt = 1
let slider = document.querySelector('.slider')

setInterval(()=>{
    if (cnt == 4) cnt = 1
    let str = 'slide-' + cnt + '.jpg';
    slider.style = `background-image: url(${str});`
    cnt++
},1000)
let controlPrev = document.querySelector('.prev')
let controlNext = document.querySelector('.next')

controlNext.addEventListener('click', ()=>{
    if (cnt == 0) cnt = 3
    if (cnt == 4) cnt = 1
    let str = 'slide-' + cnt + '.jpg';
    slider.style = `background-image: url(${str});`
    cnt++
})

controlPrev.addEventListener('click', ()=>{
    if (cnt == 0) cnt = 3
    if (cnt == 4) cnt = 1
    let str = 'slide-' + cnt + '.jpg';
    slider.style = `background-image: url(${str});`
    cnt--
})
/*Modal*/
const bodals=document.querySelectorAll('.list-js')
const modal=document.querySelector('.modal')
const modalclose=document.querySelector('.modal-body__icon-js')
const modalbody=document.querySelector('.modal-body')
function show(){
      modal.classList.add('open')
}
show()
function hide(){
      modal.classList.remove('open')
}
modalclose.addEventListener('click',show)
for(const bodal of bodals){
    bodal.addEventListener('click',hide)
}
modal.addEventListener('click',show)
modalbody.addEventListener ('click',function(event){
     event.stopPropagation()
})

/*2*/
const bodals1=document.querySelectorAll('.list-js__2')
const modal1=document.querySelector('.modal1')
const modalclose1=document.querySelector('.modal-body__icon-js1')
const modalbody1=document.querySelector('.modal-body1')
function show1(){
      modal1.classList.add('open1')
}
show1()
function hide1(){
      modal1.classList.remove('open1')
}
modalclose1.addEventListener('click',show1)
for(const bodal1 of bodals1){
    bodal1.addEventListener('click',hide1)
}
modal1.addEventListener('click',show1)
modalbody1.addEventListener ('click',function(event1){
     event1.stopPropagation()
})
/*3*/
const bodals2=document.querySelectorAll('.list-js__3')
const modal2=document.querySelector('.modal2')
const modalclose2=document.querySelector('.modal-body__icon-js2')
const modalbody2=document.querySelector('.modal-body2')
function show2(){
      modal2.classList.add('open2')
}
show2()
function hide2(){
      modal2.classList.remove('open2')
}
modalclose2.addEventListener('click',show2)
for(const bodal2 of bodals2){
    bodal2.addEventListener('click',hide2)
}
modal2.addEventListener('click',show2)
modalbody2.addEventListener ('click',function(event2){
     event2.stopPropagation()
})
/*4*/
const bodals3=document.querySelectorAll('.list-js__4')
const modal3=document.querySelector('.modal3')
const modalclose3=document.querySelector('.modal-body__icon-js3')
const modalbody3=document.querySelector('.modal-body3')
function show3(){
      modal3.classList.add('open3')
}
show3()
function hide3(){
      modal3.classList.remove('open3')
}
modalclose3.addEventListener('click',show3)
for(const bodal3 of bodals3){
    bodal3.addEventListener('click',hide3)
}
modal3.addEventListener('click',show3)
modalbody3.addEventListener ('click',function(event3){
     event3.stopPropagation()
})
/*modal form*/
const bodals4=document.querySelectorAll('.item__icon1')
const modal4=document.querySelector('.modal-form')
const modalclose4=document.querySelector('.form-login-header__icon')
const modalbody4=document.querySelector('.modal-form__body')
function show4(){
      modal4.classList.add('open4')
}
show4()
function hide4(){
      modal4.classList.remove('open4')
}
modalclose4.addEventListener('click',show4)
for(const bodal4 of bodals4){
    bodal4.addEventListener('click',hide4)
}
modal4.addEventListener('click',show4)
modalbody4.addEventListener ('click',function(event4){
     event4.stopPropagation()
})