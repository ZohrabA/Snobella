let carusel= document.getElementById("carusell")
let one= document.getElementById("but-one")
let two= document.getElementById("but-two")
let three= document.getElementById("but-three")
let bag= document.getElementById("bagg")
let namee= document.getElementById("bagname")
let persent= document.getElementById("persent")
let goo= document.getElementById("goo")
let backk= document.getElementById("backk")
let torn= document.getElementById("torn")
let righ= document.getElementById("righ")
let lef= document.getElementById("lef")
let leather= document.getElementById("leather")
let righh= document.getElementById("righh")
let leff= document.getElementById("leff")
let leatherr= document.getElementById("leatherr")
let righhh= document.getElementById("righhh")
let lefff= document.getElementById("lefff")
let leatherrr= document.getElementById("leatherrr")
let ureh = document.getElementsByClassName("ureh");

[...ureh].forEach(index => {
    index.addEventListener("click", () => {
        if(index.style.fill == "red"){
            index.style.fill = "#E5E5E5"
        } else {
            index.style.fill = "red"
        }
       
    })
})


// function disableselect(e)
// {
// return false
// }
// function reEnable()
// {
// return true
// }
//if IE4+
document.onselectstart=new Function ("return false")
//Gematriga
//if NS6
// if (window.sidebar)
// {
// document.onmousedown=disableselect
// document.onclick=reEnable
// }



let a = -230
let b = -220
goo.addEventListener("click", ()=>{
    b = a 
    torn.style.left=`${a}px`
    a-=230
    if(a<-460){
        a=0}
})

backk.addEventListener("click", ()=>{
    a=b
    b+=230
    if(b>9){
        b=-460 }
    torn.style.left=`${b}px`
})



let c = -310
let d = -300
righ.addEventListener("click", ()=>{
    d = c 
    leather.style.left=`${c}px`
    c-=310
    if(c<-620){
        c=0}
})

lef.addEventListener("click", ()=>{
    c=d
    d+=310
    if(d>9){
        d=-620 }
    leather.style.left=`${d}px`
})


let e = -310
let f = -300
righh.addEventListener("click", ()=>{
    f = e 
    leatherr.style.left=`${e}px`
    e-=310
    if(e<-620){
        e=0}
})

leff.addEventListener("click", ()=>{
    e=f
    f+=310
    if(f>9){
        f=-620 }
    leatherr.style.left=`${f}px`
})


let g = -310
let h = -300
righhh.addEventListener("click", ()=>{
    f = g 
    leatherrr.style.left=`${g}px`
    g-=310
    if(g<-620){
        g=0}
})

lefff.addEventListener("click", ()=>{
    g=h
    h+=310
    if(h>9){
        h=-620 }
    leatherrr.style.left=`${h}px`
})



two.addEventListener("click", ()=>{
    bag.innerHTML=`
 <img src="./image/bag2.png">`
 namee.innerText=`60%`
 persent.innerText=`Backpack`
})

 
three.addEventListener("click", ()=>{
    bag.innerHTML=`
<img src="./image/bag5.png">`
namee.innerText=`45%`
persent.innerText=`Shoulder bag`
})
one.addEventListener("click", ()=>{
    bag.innerHTML=`
    <img src="./image/carousel_bag.png">`
    namee.innerText=`30%`
    persent.innerText=`Handbag product`
})


