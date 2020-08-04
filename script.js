$(document).ready(function () {

    // Slide interval BG header

    setInterval(function () {
        $('#bgCar > img:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#bgCar')
    }, 15000)


    // Annonces qui apparaissent avec le scroll
    
    function showImages() {

        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            $('#car5').fadeIn('3000');
            $('#car6').fadeIn('3500');
            $('#car7').fadeIn('4000');
            $('#car8').fadeIn('4500');
            // Annule l'événément window.onscroll
            window.onscroll = null;
        }
    }

    window.onscroll = function () {
        showImages()
    };


}) //Ici finit $(document).ready(function () {