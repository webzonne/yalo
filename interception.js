const default1= document.getElementById("default1");
const default2= document.getElementById("default2");
const default3= document.getElementById("default3");
const nomm1= document.getElementById("nom1");
const nomm2= document.getElementById("nom2");
const nomm3= document.getElementById("nom3");
const nomm4= document.getElementById("nom4");


const cargarImagen = (entrada, observador) => {
    
    entrada.forEach((entrada) =>{
       
        if(entrada.isIntersecting){
           entrada.target.classList.add('animation');
           entrada.target.classList.add('tarjeta1');
           entrada.target.classList.add('tarjeta2');
           entrada.target.classList.add('tarjeta3');
           entrada.target.classList.add('tarjeta4');
               
        }
       
        
    });
   
}

const observador = new IntersectionObserver(cargarImagen, {
    
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold:0
     
 });

 observador.observe(default1);
 observador.observe(default2);
 observador.observe(default3);
 observador.observe(nomm1);
 observador.observe(nomm2);
 observador.observe(nomm3);
 observador.observe(nomm4);
 
