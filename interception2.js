const nom1 = document.getElementById("nom1");
const nom2 = document.getElementById("nom2");
const nom3 = document.getElementById("nom3");
const nom4 = document.getElementById("nom4");


const cargarImagenn = (entradaa, observadorr) => {
    
 
    entradaa.forEach((entradaa) =>{
       
        if(entradaa.isIntersecting){
            uno();
            dos();
            tres();
            cuatro();
            observadorr.disconnect();
        }
        
    });
       
}

const observadorr = new IntersectionObserver(cargarImagenn, {
    
    root: null,
     rootMargin: '0px 0px 0px 0px',
    threshold:0.2
     
 });

 observadorr.observe(nom1);
 observadorr.observe(nom2);
 observadorr.observe(nom3);
 observadorr.observe(nom4);
