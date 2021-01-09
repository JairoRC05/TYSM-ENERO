let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click",function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos');
        contador=1;
    }else{
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
})

window.addEventListener('resize', function(){
    if(screen.width > 750){
        contador=0;
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');

    }
})

window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('.links-header');
        if(e.target == span){
            contador=0;
        }
    }
});




   // Look for .hamburger
        var hamburger = document.querySelector(".hamburger");
        // On click
        hamburger.addEventListener("click", function () {
            // Toggle class "is-active"
            hamburger.classList.toggle("is-active");
            // Do something else, like open/close menu
        });



//Navbar
        $(window).scroll(function () {
            $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
        });



        //AOS
         AOS.init();



         var container = document.getElementById('charger');
setTimeout(function() {
	container.classList.add('cerrar');
  document.body.style.overflowY= "visible";// despueés de cargar le devolvemos el scroll
}, 9000);


