
//Navbar
        $(window).scroll(function () {
            $("#navbar").toggleClass('scrolled', $(this).scrollTop() > 50);
            $("#text_dark").removeClass('text-dark');
        });
        //AOS
         AOS.init();



      

