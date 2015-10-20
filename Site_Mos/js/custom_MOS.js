$("#main section").waypoint( function( direction ) {
    if( direction === 'down' ) {
        change( $( this ) );
    }
}, { offset: '20%' } ).waypoint( function( direction ) {
    if( direction === 'up' ) {
        change( $( this ) );
    }
}, { offset: '-20%' } );
function change($section){
    $('nav.menu a').removeClass('current');
    currentSection = $section.attr('id');
    $('.target-'+currentSection).addClass('current');
}
$('nav.menu a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
});
$( window ).on( 'debouncedresize', function() {
    $('html, body').animate({
        scrollTop: $("#"+currentSection).offset().top
    }, 500);
} );
$('#releaseMenu').click(function(){
    toggleMobileMenu();
});
$('.menumobile a').click(function(){
    toggleMobileMenu();
});
function toggleMobileMenu(){
    $('.menumobile').slideToggle();
}
function change($section){
    $('nav.menu a').removeClass('current');
    currentSection = $section.attr('id');
    $('body').removeClass();
    $('body').addClass( $section.attr('id') + '-visible' );
    $('.target-'+currentSection).addClass('current');
}
var $elements = $('#elements');
// Je stocke le <ul> qui contient les éléments du portfolio dans une variable
// en ciblant à l'aide de son id : cela va servir à initialiser isotope
$elements.isotope({
    // j'initialise isotope sur la liste <ul>
    // Option : Aucune, ici
});
$elements.isotope({ filter: '.tous' });
// Je filtre par défaut sur "tout"
// filter items when filter link is clicked
$('.portfolio nav a').click(function(){
// Au clic sur un lien du <nav>
    var selector = $(this).attr('data-filter');
    // Définition du sélecteur :
    // le contenu de l'attribut data-filter du lien sur lequel on vient de cliquer
    $elements.isotope({ filter: selector });
    // Filtre des <li> qui correspondent au data-filter du lien cliqué
    $('.portfolio nav a').removeClass('current');
    $(this).addClass('current');
    //Esthétique : j'attribue une classe .current au lien/filtre cliqué
    return false;
});
