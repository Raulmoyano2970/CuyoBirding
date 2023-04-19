document.addEventListener("DOMContentLoaded", function(){
 let imagenes = [
{img: "/assets/img/pagina/1.jpg"},
{img: "/assets/img/pagina/2.jpg"},
{img: "/assets/img/pagina/3.jpg"},
{img: "/assets/img/pagina/4.jpg"},
{img: "/assets/img/pagina/5.jpg"},
{img: "/assets/img/pagina/6.jpg"},
{img: "/assets/img/pagina/7.jpg"},
{img: "/assets/img/pagina/8.jpg"},
{img: "/assets/img/pagina/9.jpg"},
{img: "/assets/img/pagina/27.jpg"},
{img: "/assets/img/pagina/11.jpg"},
{img: "/assets/img/pagina/12.jpg"},
{img: "/assets/img/pagina/13.jpg"},
{img: "/assets/img/pagina/14.jpg"},
{img: "/assets/img/pagina/15.jpg"},
{img: "/assets/img/pagina/16.jpg"},
{img: "/assets/img/pagina/17.jpg"},
{img: "/assets/img/pagina/18.jpg"},
{img: "/assets/img/pagina/19.jpg"},
{img: "/assets/img/pagina/26.jpg"},
{img: "/assets/img/pagina/21.jpg"},
{img: "/assets/img/pagina/22.jpg"},
{img: "/assets/img/pagina/23.jpg"},
{img: "/assets/img/pagina/24.jpg"},
{img: "/assets/img/pagina/25.jpg"},

 ]
let contaodor = 0
const contenedor = document.querySelector(".slideshow")
const overlay = document.querySelector(".overlay")
const galeria_imagenes = document.querySelectorAll(".galeria img")
const img_slideshow = document.querySelector(".slideshow img")

contenedor.addEventListener("click", function(event){
    let atras = contenedor.querySelector(".atras"),
    adelante = contenedor.querySelector(".adelante"),
    img = contenedor.querySelector("img"),
    tgt = event.target
    if(tgt == atras){
        if (contador > 0){
            img.src = imagenes[contador-1].img
            contador--
        }else{
            img.src= imagenes[imagenes.length-1].img
            contador= imgenes.length-1
        }
        }else if(tgt == adelante){
            if(contador < imagenes.length -1){
                img.src = imagenes[contador +1].img
                contador++
            }else{
                img.src = imagenes[0].img
                contador = 0
            }
        }
    })

Array.from(galeria_imagenes).forEach(img =>{
    img.addEventListener("click", event =>{
        const imagen_seleccionada = +event.target.dataset.imgMostrar
        img_slideshow.src = imagenes[imagen_seleccionada].img
        contador = imagen_seleccionada
        overlay.style.opacity = 1
        overlay.style.visibility = "visible"
    })
})

document.querySelector(".btn_cerrar").addEventListener("click", ()=>{
    overlay.style.opacity = 0
    overlay.style.visibility = "hidden"
})

})

