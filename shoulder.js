let hthree= document.getElementById("h-three")
let sil= document.getElementById("sil")
let hthreee= document.getElementById("h-threee")
let sill= document.getElementById("sill")
let hthreeee= document.getElementById("h-threeee")
let silll= document.getElementById("silll")
let nex= document.getElementById("nex")
let hthreeeee= document.getElementById("h-threeeee")
let sillll= document.getElementById("sillll")
let nexx= document.getElementById("nexx")

document.onselectstart=new Function ("return false")
let qara=document.getElementsByClassName("qara");
[...qara].forEach(index => {
    index.addEventListener("click", () => {
        if(index.style.color == "black"){
            index.style.color = "rgba(21, 21, 21, 0.7)"
        } else {
            index.style.color = "black"
        }
       
    }) 
})
hthree.addEventListener("click", ()=>{
    [...qara].forEach(index => {
    index.style.display="block"
    sil.style.display="flex"
    })
   
});

sil.addEventListener("click", ()=>{
    [...qara].forEach(index => {
        index.style.display="none"
        sil.style.display="none"
        })
})





let qar=document.getElementsByClassName("qar");
[...qar].forEach(index => {
    index.addEventListener("click", () => {
        if(index.style.color == "black"){
            index.style.color = "rgba(21, 21, 21, 0.7)"
        } else {
            index.style.color = "black"
        }
       
    }) 
})
let qaraa=document.getElementsByClassName("qaraa");
hthreee.addEventListener("click", ()=>{
    [...qaraa].forEach(index => {
    index.style.display="block"
    sill.style.display="flex"
    })
   
});
sill.addEventListener("click", ()=>{
    [...qaraa].forEach(index => {
        index.style.display="none"
        sill.style.display="none"
        })
})

hthreeee.addEventListener("click", ()=>{
   
    nex.style.display="flex"
    silll.style.display="flex"
   
   
});
silll.addEventListener("click", ()=>{
        nex.style.display="none"
        silll.style.display="none"
})
hthreeeee.addEventListener("click", ()=>{
   
    nexx.style.display="flex"
    sillll.style.display="flex"
   
   
});
sillll.addEventListener("click", ()=>{
        nexx.style.display="none"
        sillll.style.display="none"
})

let search= document.getElementById("search")
let svgg= document.getElementById("svgfil")
search.addEventListener("click", ()=>{
    search.style.border="2px solid #FFDD45"
    svgg.style.width="22px"
    svgg.style.height="22px"
})

let sizeo= document.getElementsByClassName("size-o");

[...sizeo].forEach(index=>{
    index.addEventListener("click", ()=>{
        if(index.style.backgroundColor=="red"){
            
            index.style.backgroundColor="transparent"
        }else{
        
        index.style.backgroundColor="red"}
    })
})


let rez=document.getElementById("rez")
let rex=document.getElementById("rex")
let rec=document.getElementById("rec")
let rev=document.getElementById("rev")
let reb=document.getElementById("reb")
let ren=document.getElementById("ren")
let rem=document.getElementById("rem")
let rea=document.getElementById("rea")
let res=document.getElementById("res")
let red=document.getElementById("red")
let ref=document.getElementById("ref")
let reg=document.getElementById("reg")

rez.addEventListener("click", ()=>{
    rez.style.border="1px solid #273142"
})
rex.addEventListener("click", ()=>{
    rex.style.border="1px solid #0085FF"
})
rec.addEventListener("click", ()=>{
    rec.style.border="1px solid #3D2A33"
})
rev.addEventListener("click", ()=>{
    rev.style.border="1px solid #773838"
})
reb.addEventListener("click", ()=>{
    reb.style.border="1px solid #000000"
})
ren.addEventListener("click", ()=>{
    ren.style.border="1px solid #307E46"
})
rem.addEventListener("click", ()=>{
    rem.style.border="1px solid #0085FF"
})
rea.addEventListener("click", ()=>{
    rea.style.border="1px solid #FF6B00"
})
res.addEventListener("click", ()=>{
    res.style.border="1px solid #D6B73B"
})
red.addEventListener("click", ()=>{
    red.style.border="1px solid #7C4DFF"
})
ref.addEventListener("click", ()=>{
    ref.style.border="1px solid #F75145"
})
reg.addEventListener("click", ()=>{
    reg.style.border="1px solid #895C31"
})
let endd =document.getElementById("endd")
let endend =document.getElementById("endend")
let eend =document.getElementById("eend")

endend.addEventListener("click", ()=>{
   
    endd.style.display="flex"
    eend.style.display="flex"
   
   
});
eend.addEventListener("click", ()=>{
        endd.style.display="none"
        eend.style.display="none"
})